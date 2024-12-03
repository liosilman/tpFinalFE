import React from "react";
import { BiCommentAdd } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import "./ContactSideBar.css";
import initialContacts from "../../data/WhatsAppData"; // Ajusta la ruta según tu estructura de carpetas

function ContactSideBar({ onContactClick }) {
  return (
    <div className="contactSidebar">
      {/* Header de SideBar*/}
      <header className="contactSidebarHeader">
        <h2>Chats</h2>
        <div className="contactSidebarHeaderIcons">
          <BiCommentAdd className="icon" onClick={onContactClick} />
          <BsThreeDotsVertical className="icon" />
        </div>
      </header>
      <div className="search-container">
        <span className="search-icon"> <IoIosSearch /></span>
        <input type="text"  placeholder="Buscar" className="search-input" />
         
      </div>


      {/* Botones de Chats */}
      <div className="chatsButtons">
        <button className="allChats">Todos</button>
        <button className="notReadsChats">No leìdos</button>
        <button className="favChats">Favoritos</button>
        <button className="groupChats">Grupos</button>
      </div>
      {/* Botón de "Chats archivados" */}
      <div className="archivados">
        <span className="archivadosIcon">
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
          >
            <title>archived-outline</title>
            <path
              d="M21.4889 4.47778L19.9444 2.61111C19.6444 2.23333 19.1889 2 18.6667 2H5.33333C4.81111 2 4.35556 2.23333 4.04444 2.61111L2.51111 4.47778C2.18889 4.85556 2 5.35556 2 5.88889V19.7778C2 21 3 22 4.22222 22H19.7778C21 22 22 21 22 19.7778V5.88889C22 5.35556 21.8111 4.85556 21.4889 4.47778ZM5.6 4.22222H18.4L19.3 5.3H4.71111L5.6 4.22222ZM4.22222 19.7778V7.55556H19.7778V19.7778H4.22222ZM13.6111 9.77778H10.3889V13.1111H7.55556L12 17.5556L16.4444 13.1111H13.6111V9.77778Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
        <span className="archivadosText">Archivados</span>
      </div>

      {/* Lista de contactos */}
      <div className="contacts-list">
        {initialContacts.map((contact) => (
          <div
            key={contact.id}
            className="contact-item"
            onClick={() => onContactClick(contact)}
          >
            <img
              src={contact.avatar}
              alt={`${contact.nombre} avatar`}
              className="contact-avatar"
            />
            <div className="contact-info">
              <p className="contact-name">{contact.nombre}</p>
              <p className="contact-lastMessage">
                {contact.mensajes.length > 0
                  ? contact.mensajes[contact.mensajes.length - 1].texto
                  : "No messages yet"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* WhatsApp sección */}
      <div className="whatsapp-prompt">
        <FaWhatsapp />
        <span>Get WhatsApp for Windows</span>
      </div>
    </div>
  );
}

export default ContactSideBar;
