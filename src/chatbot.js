// src/Chatbot.js
import React, { useState } from 'react';
import './chatbot.css';  // Updated import for Chatbot CSS

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! Ask me about the weather.', sender: 'bot' },
  ]);
  const [userInput, setUserInput] = useState('');

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    // Add the user's message
    const userMessage = { text: userInput, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Mock response based on user's message
    const botMessageText = userInput.toLowerCase().includes('weather')
      ? "I'm just a mock bot, but it looks sunny outside!"
      : "I'm sorry, I can only answer questions about the weather.";

    const botMessage = { text: botMessageText, sender: 'bot' };
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);

    // Clear the input
    setUserInput('');
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chatbot-message ${message.sender === 'bot' ? 'bot' : 'user'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
