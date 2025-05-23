
const MessageBubble = ({ sender, content }) => {
  const isUser = sender === 'user';
  return (
  <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
    <div className={`max-w-xs px-4 py-2 rounded-2xl shadow-md ${isUser ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}>
      {content}
    </div>
  </div>
  );
}

export default MessageBubble;