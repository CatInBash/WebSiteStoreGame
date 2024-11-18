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
import HomePage from "./components/home/HomePage.jsx";
import MisJuegosPage from "./components/mis-juegos/misJuegosPage.jsx";
import GameDetailOwnerPage from "./components/juegoDetailOwner/GameDetailOwnerPage.jsx";
import { AppProvider } from "./AppProvider.jsx";


function App() {

    const juegosTodos= [
        {"title":"elderscrolls",
        "image":"1",
        "id":"1"
    },
    {"title":"fallout",
        "image":"2",
        "id":"2"
    }
    
    ]



    
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({

    "_id":"1",
    "owner":true,
    "juegos":juegos
});


  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);  // Establecer la información del usuario cuando se inicie sesión
};

const handleLogout = () => {
  setIsAuthenticated(false);
  setUser(null);  // Limpiar el estado del usuario al cerrar sesión
};

  

  return (<AppProvider>
    <Router>
    <div className="App">
    <Nav
    user={user}
    isAuthenticated={isAuthenticated}
    setIsAuthenticated={setIsAuthenticated}
    setUser={setUser}
  />
        
        <div className="main-content">
            <Routes>
                <Route path="/" element={<HomePage juegos={juegos} user={user} />} />
                
                <Route path="/iniciarSesion" element={<LoginPage onLogin={handleLogin} />} />
                <Route path="/registrarse" element={<RegisterPage />} />
                <Route path="/mis-juegos" element={<MisJuegosPage  owner={user.owner} juegos={user.juegos}/>} />
                <Route path="/wishList" element={<WishListPage />} />
                <Route path="/juegoDescripcion" element={<ContentMainDetails />} />
                <Route path="/juegoDetailOwner" element={<GameDetailOwnerPage
                  
                  user={user}

                  onModify={handleModify} 
                  onDelete={handleDelete} 
                  onPublish={handlePublish} 
                  onUnpublish={handleUnpublish} />} />



            </Routes>
        </div>
    </div>
</Router>

      
</AppProvider> );
}

export default App;
