import React from "react";
import { SlMagnifier } from "react-icons/sl";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import "./ChatHeader.css";

const ChatHeader = ({ contact }) => {

  return (
    <header className="chatHeader">
      {/* Información del contacto */}
      <div className="contactInfo">
        <img
          src={contact.avatar}
          alt={`${contact.nombre} avatar`}
          className="contactAvatar"
        />
        <div className="contactDetails">
          <p className="contactName">{contact.nombre}</p>
        </div>
      </div>

      {/* Iconos de acciones */}
      <div className="chatActions">
        <button className="videoDropdown">
          <FaVideo className="icon videoIcon" />
          <IoIosArrowDown className="icon arrowDownIcon" />
        </button>
        <button className="iconButton">
          <SlMagnifier className="icon searchIcon" />
        </button>
        <button className="iconButton">
          <BsThreeDotsVertical className="icon menuIcon" />
        </button>
      </div>
    </header>
  );
};

export default ChatHeader;
