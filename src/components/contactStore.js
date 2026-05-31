// src/components/contactStore.js
export const useContactStore = () => ({
  openContact: () => window.dispatchEvent(new CustomEvent("open-contact")),
});