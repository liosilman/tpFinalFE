import React, { useState } from "react";
import Messages from "../Messages/Messages"; // Componente para mostrar los mensajes
import InputMessage from "../InputMessage/InputMessage"; // Componente para el campo de entrada del mensaje
import ChatHeader from "../ChatHeader/ChatHeader"; // Barra de navegación del chat (opcional)
import "./ChatContainer.css";


const ChatContainer = ({ selectedContact, onSendMessage }) => {
  const [messageText, setMessageText] = useState("");

  // Manejo del envío de mensajes
  const handleSend = () => {
    if (messageText.trim()) {
      onSendMessage(messageText); // Envía el mensaje al componente padre
      setMessageText(""); // Limpia el campo de entrada
    }
  };

  return (
    <div className="chatContainer">
      
        {selectedContact?.mensajes?.length > 0 ? (
          // Si existen mensajes, los renderizamos
          <Messages mensajes={selectedContact.mensajes} />
        ) : (
          // Si no hay mensajes
          <p>No hay mensajes aún.</p>
        )}
      
      <div className="inputContainer">
        <InputMessage
          messageText={messageText}
          setMessageText={setMessageText}
          onSend={handleSend}
        />
      </div>
    </div>
  );
};

export default ChatContainer;
