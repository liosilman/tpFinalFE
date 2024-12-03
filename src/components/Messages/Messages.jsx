import React from "react";
import "./Messages.css";
import Message from "../Message/Message";

const Messages = ({ mensajes }) => { 


  return (
    <div className="messagesList">
      {mensajes.map((msg, index) => {

        return (
          <Message
            key={index}
            emisor={msg.emisor}
            hora={msg.hora}
            text={msg.texto}
            status={msg.status}
          />
        );
      })}
    </div>
  );
};

export default Messages;
