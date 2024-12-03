import React, { useState } from "react";
import Messages from "../Messages/Messages"; // Componente para mostrar los mensajes
import InputMessage from "../InputMessage/InputMessage"; // Componente para el campo de entrada del mensaje
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
      {/* Si no hay un chat seleccionado, mostrar la imagen de bienvenida */}
      {!selectedContact ? (
        <div className="placeholderContainer">
          <img
            src="/images/home-bg.png"
            alt="Chat de bienvenida"
            className="placeholderImage"
          />
          <p className="placeholderText">Selecciona un chat para comenzar.</p>
        </div>
      ) : (
        <>
          {/* Si hay un contacto seleccionado, mostramos los mensajes */}
          <Messages mensajes={selectedContact.mensajes} />
        </>
      )}
      
      {/* Componente para la entrada de mensajes */}
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
