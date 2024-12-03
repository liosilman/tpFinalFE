import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; 
import initialContacts from "../data/WhatsAppData";
import ContactSideBar from "../components/ContactSideBar/ContactSideBar";
import ChatContainer from "../components/ChatContainer/ChatContainer";
import "./WhatsAppScreen.css";
import SideBarMini from "../components/SideBarMini/SideBarMini";
import ChatHeader from "../components/ChatHeader/ChatHeader";

const WhatsAppScreen = () => {
  const { contactId } = useParams(); // Extraer el contactId de la URL
  const [contactsState, setContactsState] = useState(initialContacts);
  const [selectedContact, setSelectedContact] = useState(null);
  const navigate = useNavigate(); // Para cambiar la URL si es necesario

  // Lógica para manejar el envío de mensajes
  const handleSendMessage = (messageText) => {
    if (selectedContact) {
      const updatedContacts = contactsState.map((contact) => {
        if (contact.id === selectedContact.id) {
          const updatedMessages = [
            ...contact.mensajes,
            {
              id: uuidv4(), // Usamos uuid para generar un id único
              emisor: "YO",
              texto: messageText,
              hora: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
              status: "no-visto",
            },
          ];
          return { ...contact, mensajes: updatedMessages };
        }
        return contact;
      });

      setContactsState(updatedContacts);
      setSelectedContact(updatedContacts.find((contact) => contact.id === selectedContact.id));

      // Guardar los contactos actualizados (incluyendo los mensajes) en localStorage
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
    }
  };

  // Cargar los contactos desde localStorage cuando se recarga la página
  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      try {
        const parsedContacts = JSON.parse(storedContacts);
        setContactsState(parsedContacts);
      } catch (e) {
        console.error("Error al cargar los contactos desde localStorage:", e);
      }
    }
  }, []);

  // Seleccionar el contacto cuando el ID de la URL cambia
  useEffect(() => {
    if (contactId) {
      const contact = contactsState.find((contact) => contact.id === parseInt(contactId));
      if (contact) {
        setSelectedContact(contact);
      } else {
        setSelectedContact(null); // Si el contacto no existe, deseleccionar
      }
    }
  }, [contactId, contactsState]);

  return (
    <div className="whatsappScreenContainer">
      <SideBarMini />
      <div className="sideBarContainer">
        <ContactSideBar
          contacts={contactsState}
          onContactClick={(contact) => {
            setSelectedContact(contact);
            navigate(`/chat/${contact.id}`); // Cambiar la URL para reflejar el contacto seleccionado
          }}
        />
      </div> 
      <div 
        className="mainChatContainer">
        <div className="chatHeaderContainer"> 
          {selectedContact && <ChatHeader contact={selectedContact} />}
        </div>
        
        {selectedContact ? (
          <ChatContainer
            selectedContact={selectedContact}
            onSendMessage={handleSendMessage}
          />
        ) : ( 
          <div className="placeholder">Selecciona un contacto para chatear.</div>
        )}
      </div>
    </div>
  );
};

console.log(WhatsAppScreen);

export default WhatsAppScreen;
