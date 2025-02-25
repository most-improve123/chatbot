import React, { useState } from 'react';
import faqs from '../components/faqs.json';
import '../components/Chatbot.css';
import logo from '../components/udb.png'; // Importa la imagen del logo

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      const response = faqs.find((faq) =>
        faq.question.toLowerCase() === input.toLowerCase()
      );
      setMessages([...messages, { user: 'student', text: input }]);
      setInput('');
      if (response) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { user: 'bot', text: response.answer }
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { user: 'bot', text: 'Lo siento, no tengo una respuesta para esa pregunta.' }
        ]);
      }
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot">
        {/* Agrega la imagen del logo aquí */}
        <img src={logo} alt="Logo" className="chatbot-logo" />
        <div className="chat-window">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.user}`}>
              <strong>{message.user}:</strong> {message.text}
            </div>
          ))}
        </div>
        <div className="input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe un mensaje..."
          />
          <button onClick={handleSendMessage}>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
