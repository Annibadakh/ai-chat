import './App.css';
import { useEffect, useState } from 'react';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import { loadMessages, saveMessages, ClearHistory} from './utils/storage';
import { v4 as uuidv4 } from 'uuid';
import { detectPlugin } from './utils/parser';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [isClear, setIsClear] = useState(false)

  useEffect(() => {
    const storedMessages = loadMessages();
    setMessages(storedMessages);
    setIsClear(false);
  }, [isClear]);

  useEffect(() => {
    if (messages.length > 0) {
      saveMessages(messages);
    }
  }, [messages]);


  const handleClearHistory = async () => {
    await ClearHistory();
    setIsClear(true);

  }
  const handleSendMessage = async (text) => {
    const userMessage = {
      id: uuidv4(),
      sender: 'user',
      content: text,
      type: 'text',
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);

    const detected = detectPlugin(text);
    if (detected) {
      const { plugin, args } = detected;
      const pluginData = await plugin.execute(...args);
      const pluginMessage = {
        id: uuidv4(),
        sender: 'assistant',
        content: '',
        type: 'plugin',
        pluginName: plugin.name,
        pluginData,
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, pluginMessage]);
    } else {
      const defaultMessage = {
        id: uuidv4(),
        sender: 'assistant',
        content: "I'm not sure how to help with that.",
        type: 'text',
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, defaultMessage]);
    }
  };

  

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex-1 overflow-auto">
        <ChatWindow messages={messages} />
      </div>
      <div className="p-4 border-t bg-white">
        <ChatInput onSend={handleSendMessage} onClear={handleClearHistory} />
      </div>
    </div>
  );
};

export default App;