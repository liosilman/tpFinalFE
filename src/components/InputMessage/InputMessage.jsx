import React, { useState } from "react";
import "./InputMessage.css";
import { BiHappy } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { BiSolidMicrophone } from "react-icons/bi";
import { IoPaperPlaneSharp } from "react-icons/io5";

const InputMessage = ({ messageText, setMessageText, onSend }) => {
  const [isInputEmpty, setIsInputEmpty] = useState(true);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setMessageText(value);
    setIsInputEmpty(value.trim() === "");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isInputEmpty) {
      onSend();
    }
  };

  return (
    <div className="inputMessageContainer">
      <div className="leftIcons">
        <button className="buttonIcon">
          <BiHappy className="icon" />
        </button>
        <button className="buttonIcon">
          <AiOutlinePlus className="icon" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="messageForm">
        <input
          type="text"
          placeholder="Escribe un mensaje"
          value={messageText}
          onChange={handleInputChange}
        />
        {!isInputEmpty && (
          <button type="submit" className="sendIcon buttonIcon">
            <IoPaperPlaneSharp className="icon" />
          </button>
        )}
      </form>

      {isInputEmpty && (
        <button className="buttonIcon">
          <BiSolidMicrophone className="icon" />
        </button>
      )}
    </div>
  );
};

export default InputMessage;
