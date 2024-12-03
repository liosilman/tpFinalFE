import React, { useEffect, useRef } from "react";
import "./Messages.css";
import Message from "../Message/Message";

const Messages = ({ mensajes }) => {
  const messagesEndRef = useRef(null); // Ref para el marcador al final de la lista.

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); // Desplázate hacia el marcador.
  }, [mensajes]); // Se ejecuta cada vez que cambian los mensajes.

  return (
    <div className="messagesList">
      {mensajes.map((msg, index) => (
        <Message
          key={index}
          emisor={msg.emisor}
          hora={msg.hora}
          text={msg.texto}
          status={msg.status}
        />
      ))}
      <div ref={messagesEndRef} /> {/* Marcador invisible */}
    </div>
  );
};

export default Messages;
