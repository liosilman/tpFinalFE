import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Usa Routes y Route para definir tus rutas
import WhatsAppScreen from "./src/screens/WhatsAppScreen";
import HomeScreen from "./src/screens/HomeScreen";
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/chat/:contactId" element={<WhatsAppScreen />} />
    </Routes>
  );
};

export default App;
