import ContentMain from "./components/home/ContentMainTemp.jsx";
import LoginForm from "./components/inicioSesion/LoginForm.jsx";
import StarRating from "./components/juegoDescripcion/StarRating.jsx";
import RegisterForm from "./components/registrarse/RegisterForm.jsx";
import ContentMainDetails from "./components/juegoDescripcion/ContentMainDetails.jsx"
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';

import { useState } from "react";
import LoginPage from './components/inicioSesion/LoginPage.jsx';
import RegisterPage from './components/registrarse/RegisterPage.jsx'
import ComprarForm from "./components/comprar/comprarForm.jsx";

import "./App.css"


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const juegos= [
    {"title":"elderscrolls",
    "image":"1",
    "id":"1"
},
{"title":"fallout",
    "image":"2",
    "id":"2"
}

]


  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);  // Establecer la información del usuario cuando se inicie sesión
};

const handleLogout = () => {
  setIsAuthenticated(false);
  setUser(null);  // Limpiar el estado del usuario al cerrar sesión
};

  

  return (<Router>
    <div className="App">
    <Nav
    user={user}
    isAuthenticated={isAuthenticated}
    setIsAuthenticated={setIsAuthenticated}
    setUser={setUser}
  />
        
        <div className="main-content">
            <Routes>
                <Route path="/" element={<ContentMain juegos={juegos} />} />
                <Route
                    path="/home"
                    element={
                        isAuthenticated ? (
                            <ContentMain juegos={user.juegos} />
                        ) : (
                            <LoginPage onLogin={handleLogin} />
                        )
                    }
                />
                <Route path="/iniciarSesion" element={<LoginPage onLogin={handleLogin} />} />
                <Route path="/registrarse" element={<RegisterPage />} />
            </Routes>
        </div>
    </div>
</Router>

      
  );
}

export default App;
