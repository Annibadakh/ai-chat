
import MessageBubble from './MessageBubble';
import PluginCard from './PluginCard';

const ChatWindow = ({ messages }) => {
  return (
    <div className="p-10 space-y-4 overflow-y-auto max-h-[calc(100vh-75px)]">
    {messages.map((msg) => (
      msg.type === 'plugin' ? (
        <PluginCard key={msg.id} pluginName={msg.pluginName} data={msg.pluginData} />
      ) : (
        <MessageBubble key={msg.id} sender={msg.sender} content={msg.content} />
      )
    ))}
    </div>
  );
}

export default ChatWindow;


