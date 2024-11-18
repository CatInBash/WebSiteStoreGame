import { createContext, useState } from "react";

// Crear el contexto
export const AppContext = createContext();

// Proveedor del contexto
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado del usuario (si está autenticado)
  const [wishlist, setWishlist] = useState([]); // Estado para la wishlist
  const [games, setGames] = useState([]); // Lista de videojuegos disponibles

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        wishlist,
        setWishlist,
        games,
        setGames,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};