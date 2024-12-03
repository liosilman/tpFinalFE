import React from "react";
import { FaCheckDouble, FaCheck } from "react-icons/fa6";
import "./Message.css";

const Message = ({ emisor, hora, text, status }) => {
  return (
    <div className={`messageContainer ${emisor === "YO" ? "me" : "user"}`}>
      <p className="messageText">{text}</p>
      <div className="messageInfo">
        <span className="messageTime">{hora}</span>
        
        
        {emisor === "YO" && status === "no-visto" && (
          <FaCheckDouble className="messageIconNotRead" />
        )}
        {emisor === "YO" && status === "visto" && (
          <FaCheckDouble className="messageIconRead" />
        )}
        {emisor === "YO" && status === "no-recibido" && (
          <FaCheck className="messageIconSend" />
        )}
      </div>
    </div>
  );
};

export default Message;
