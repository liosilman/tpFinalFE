import React from "react";
import ContactSideBar from "../components/ContactSideBar/ContactSideBar"; // Importa la barra lateral con los contactos
import "./HomeScreen.css"; // Puedes añadir el CSS que prefieras

const HomeScreen = ({ contacts, onContactClick }) => {
  return (
    <div className="homeScreenContainer">
      <div className="sideBarContainer">
        <ContactSideBar contacts={contacts} onContactClick={onContactClick} />
      </div>
      <div className="homeScreenContent">
        <p>Selecciona un contacto para ver el chat</p>
        {/* Aquí puedes colocar una imagen o un mensaje */}
        <img 
          src="images/home-bg.jpg" // Ruta de la imagen que quieras mostrar
          alt="Imagen de inicio"
          className="homeImage"
        />
      </div>
    </div>
  );
};

export default HomeScreen;
