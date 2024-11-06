import AvatarSesion from "./AvatarSesion";
import { Link, useNavigate } from 'react-router-dom';


function Nav2({ user, isAuthenticated, setIsAuthenticated, setUser }){
    const navigate = useNavigate();
    const handleMisJuegosClick = () => {
        if (isAuthenticated) {
            navigate('/mis-juegos');
        } else {
            alert('Por favor, inicia sesión para ver tus juegos.');
        }
    }

    const handleLogout = () => {
        setIsAuthenticated(false);
        setUser(null);  // Limpiar el estado del usuario
        navigate("/");  // Redirigir al inicio después de cerrar sesión
    }
    return (<div className="Nav" >
        
        <li>gameOff</li>
        {!isAuthenticated ? (
        <>
          <li><Link to="/iniciar-sesion">Iniciar Sesión</Link></li>
          <li><Link to="/registrarse">Registrarse</Link></li>
        </>
      ) : (
        <>
          <li onClick={handleMisJuegosClick} style={{ cursor: 'pointer' }}>Mis Juegos</li>
          <li><button onClick={handleLogout}>Cerrar Sesión</button></li>
        </>
      )}
        {isAuthenticated && <AvatarSesion user={user} />}
        {user && <button onClick={handleLogout}>Cerrar Sesión</button>}



    </div>

    )
}


export default Nav2;