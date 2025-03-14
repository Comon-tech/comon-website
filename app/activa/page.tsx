// Suggested code may be subject to a license. Learn more: ~LicenseLog:1535592616.
'use client'
import React, { useState, useRef, useEffect } from 'react';

interface Message {
  text: string;
  sender: 'user' | 'ai';
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const chatWindowRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (!input.trim() || input.length > 200) return;

    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');

    try {
      const response = await fetch('/api/activa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: data.response, sender: 'ai' },
      ]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text- pt-8 font-[family-name:var(--font-geist-sans)]">
    <div className=" w-full mx-auto pt-10 flex flex-col h-[90vh]">
      {/* <header className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold">Chat Comon</h1>
      </header> */}
      <main className="flex-grow overflow-auto bg-slate-800/50 relative p-2">
      <div ref={chatWindowRef} className="space-y-4 p-4">
        {messages.map((message, index) => (
              <div
                key={index}
                className={`max-w-sm w-auto rounded-lg p-2 break-words ${
                  message.sender === "user"
                    ? "rounded-3xl border border-[#3c3e44] px-4 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-white ml-auto"
                    : "px-4"
                }`}
              >
            {message.text}
          </div>
        ))}
      </div>
          </main>
          <footer className="mt-4 flex space-x-2 px-2">
        <input
          type="text"
          value={input}
            placeholder="Type your message..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
              if (e.key === "Enter") {
              sendMessage();
            }
          }}
            className="flex-grow px-4 py-2 rounded-3xl bg-slate-700 text-white focus:outline-none"
        />
          <button
            onClick={sendMessage}
            className="p-2 text-center rounded-3xl border border-[#3c3e44] px-4 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
            disabled={input.trim().length === 0 || input.length > 200}
          >
            Send
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Chat;