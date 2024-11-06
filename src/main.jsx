import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import RegisterPage from './components/registrarse/RegisterPage.jsx'
import AvatarSesion from './components/AvatarSesion.jsx'
import LoginPage from './components/inicioSesion/LoginPage.jsx'
import Buscador from './components/home/Buscador.jsx'
import ContentMain from './components/home/ContentMainTemp.jsx'



createRoot(document.getElementById('root')).render(
 
    <App></App>
  
)
