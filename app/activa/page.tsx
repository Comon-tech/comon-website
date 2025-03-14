'use client';
import React, { useState, useRef, useEffect } from 'react';

interface Message {
  text: string;
  sender: 'user' | 'ai';
}

interface ChatSession {
  id: number;
  messages: Message[];
  name: string;
}

const Chat: React.FC = () => {
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([
    { id: 0, messages: [], name: 'New Chat' },
  ]);
  const [currentSessionId, setCurrentSessionId] = useState<number>(0);
  const [input, setInput] = useState<string>('');
  const chatWindowRef = useRef<HTMLDivElement>(null);

  const currentSession = chatSessions.find(
    (session) => session.id === currentSessionId
  );
  const currentMessages = currentSession?.messages || [];

  const updateMessages = (newMessages: Message[]) => {
    setChatSessions((prev) =>
      prev.map((session) =>
        session.id === currentSessionId
          ? { ...session, messages: newMessages }
          : session
      )
    );
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { text: input, sender: 'user' };
    updateMessages([...currentMessages, userMessage]);
    const userInput = input;

    try {
      setInput('');
      const response = await fetch('/api/activa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const aiMessage: Message = { text: data.response, sender: 'ai' };
      updateMessages([...currentMessages, userMessage, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      setInput(userInput);
    }
  };

  const startNewChat = () => {
    const newSessionId =
      Math.max(...chatSessions.map((session) => session.id), -1) + 1;
    const newSession: ChatSession = {
      id: newSessionId,
      messages: [],
      name: 'New Chat',
    };
    setChatSessions([...chatSessions, newSession]);
    setCurrentSessionId(newSessionId);
  };

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [currentMessages]);

  const handleSessionClick = (sessionId: number) => {
    setCurrentSessionId(sessionId);
  };

  return (
    <div className="w-full h-screen flex justify-center font-[family-name:var(--font-geist-sans)] pt-12 overflow-hidden">
      <aside className="w-64  px-2 overflow-auto pt-10 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        {/* <h2 className="text-xl font-bold mb-4">Chats</h2> */}
        <button
          onClick={startNewChat}
          className="w-full bg-blue-500 text-white py-2 rounded-md mb-4">
          New Chat
        </button>
        <nav>
          <ul>
            {chatSessions.map((session) => (
              <li
                key={session.id}
                onClick={() => handleSessionClick(session.id)}
                className={`cursor-pointer py-2 ${
                  currentSessionId === session.id ? 'rounded-md border border-[#3c3e44] px-4 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-white' : 'border border-transparent px-4 text-white'
                }`}
              >
                {session.name}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      
      <div className=" w-full mx-auto flex flex-col">
        <main className="flex-grow overflow-auto relative p-2">
          <div ref={chatWindowRef} className="space-y-4 p-4">
            {currentMessages.map((message, index) => (
              <div
                key={`${index}-${message.text}`}
                className={`w-auto rounded-lg p-2 break-words ${
                  message.sender === 'user'
                    ? 'max-w-sm rounded-3xl border border-[#3c3e44] px-4 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-white ml-auto'
                    : 'px-4'
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
              if (e.key === 'Enter') {
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