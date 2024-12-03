import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import WhatsAppScreen from "./src/screens/WhatsAppScreen";
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WhatsAppScreen />} />
      <Route path="/chat/:contactId" element={<WhatsAppScreen />} />
    </Routes>
  );
};

export default App;
