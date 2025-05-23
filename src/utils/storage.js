export function saveMessages(messages) {
  localStorage.setItem('chat_history', JSON.stringify(messages));
  console.log(localStorage.getItem('chat_history'), "this is local storage");
}

export function loadMessages() {
  const stored = localStorage.getItem('chat_history');
  console.log(stored, "this is stored");
  return stored ? JSON.parse(stored) : [];
}

export function ClearHistory() {
  localStorage.clear();
}