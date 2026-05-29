import { useState, useRef, useEffect } from 'react';
import './Terminal.css';

export default function Terminal({ userData }) {
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to Git Bash Terminal!' },
    { type: 'output', text: 'Type "help" for available commands' },
  ]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalBodyRef = useRef(null);

  const commands = {
    help: () => [
      'Available commands:',
      '  whoami        - Display current user info',
      '  cat <file>    - Display file contents',
      '  echo <text>   - Display text',
      '  ls            - List directory contents',
      '  pwd           - Print working directory',
      '  date          - Show current date/time',
      '  clear         - Clear terminal',
      '  skill         - List your skills',
    ],
    whoami: () => [`${userData?.name || 'Developer'} | Full Stack + ML`],
    'cat education.txt': () => ['Amity University Jharkhand | B.Tech CSE | CGPA 9.3'],
    'cat experience.txt': () => ['IBM SkillsBuild AI/ML Intern (2025)'],
    'cat projects.txt': () => [
      'MERN Stack Applications',
      'ML/AI Projects',
      'Open Source Contributions',
    ],
    'echo $STATUS': () => ['Open to internships ✓'],
    ls: () => ['education.txt', 'experience.txt', 'projects.txt', 'skills.txt'],
    pwd: () => ['/home/sonali/portfolio'],
    date: () => [new Date().toString()],
    skill: () => [
      'Frontend: React, JavaScript, HTML, CSS',
      'Backend: Node.js, Express, MongoDB',
      'Languages: JavaScript, Python, Java',
      'Tools: Git, VS Code, Postman',
    ],
  };

  const executeCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const newHistory = [...history, { type: 'input', text: cmd }];

    if (trimmedCmd === 'clear') {
      setHistory([]);
      setInput('');
      setCommandHistory([...commandHistory, cmd]);
      return;
    }

    const output = commands[trimmedCmd]?.() || [
      `Command not found: ${cmd}. Type "help" for available commands.`,
    ];

    output.forEach((line) => {
      newHistory.push({ type: 'output', text: line });
    });

    setHistory(newHistory);
    setInput('');
    setCommandHistory([...commandHistory, cmd]);
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(input);
      e.preventDefault();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="terminal">
      <div className="term-head">
        <span className="dot r" />
        <span className="dot y" />
        <span className="dot g" />
        <span className="term-title">root@sonali:~</span>
      </div>
      <div className="term-body" ref={terminalBodyRef}>
        {history.map((item, idx) => (
          <div key={idx} className={item.type === 'input' ? 'term-input' : 'term-output'}>
            {item.type === 'input' ? (
              <>
                <span className="p">$ </span>
                <span className="k">{item.text}</span>
              </>
            ) : (
              <span className="s">{item.text}</span>
            )}
          </div>
        ))}
        <div className="term-input-line">
          <span className="p">$ </span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            className="term-input-field"
            placeholder=""
          />
          <span className="cursor" />
        </div>
      </div>
    </div>
  );
}
