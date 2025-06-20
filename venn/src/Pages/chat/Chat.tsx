import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import TypingIndicator from './TypingIndicator';


type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);

  // Function to handle sending the user message and setting up the chat with SSE for responses
  const handleSend = async () => {
    if (message) {
      const userMessage: Message = { role: 'user', content: message };
      setMessages(prev => [...prev, userMessage]);
    
      const botMessage : Message = {role :'assistant',content:"hey hi hope ur doing well and tell me what kind of help u need"};
      setMessages((prev) => [...prev,botMessage]);
      //setIsTyping(true);


      let postjsonbody = {
        "jsonrpc": "2.0",
        "id": 2,
        "method": "callTools",
        "params": message
      }

      // Send the user message to the backend to trigger the tool (e.g., AI, etc.)
      await fetch('http://localhost:3001/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postjsonbody }),
      });

      // Clear the message input after sending
      setMessage('');
    }
  };
  useEffect(() => {
    let retryTimeout: ReturnType<typeof setTimeout>

    console.log("text in use effect1");
    const connectToStream = () => {
      const source = new EventSource('http://localhost:3001/sse');

      source.onmessage = (event) => {
        const text = event.data;

        const assistantMessage: Message = { role: 'assistant', content: text };
        setMessages(prev => [...prev, assistantMessage]);
        setIsTyping(false);
      };

      source.onerror = (event) => {

        if (event.target && (event.target as EventSource).readyState === EventSource.CLOSED) {
          // Retry the connection if the EventSource is closed
          retryTimeout = setTimeout(connectToStream, 1000);
        }
      };


      return source;
    };

    const source = connectToStream();

    return () => {
      clearTimeout(retryTimeout);
      source.close();
    };
  }, []);



  return (
      <div className="flex flex-col flex-1 overflow-hidden">
        <MessageList messages={messages} />
        {isTyping && <TypingIndicator />}
        <ChatInput message={message} setMessage={setMessage} onSend={handleSend} />
      </div>
    
  );
};

export default Chat;
