import React, { useState } from 'react';

function FiltroItem({ titulo, opciones }) {
  const [abierto, setAbierto] = useState(false);

  const toggleMenu = () => {
    setAbierto(!abierto);
  };

  return (
    <div className="filtro-item">
      <button onClick={toggleMenu} className="filtro-titulo">
        {titulo} {abierto ? "▲" : "▼"}
      </button>
      {abierto && (
        <ul className="filtro-opciones">
          {opciones.map((opcion, index) => (
            <li key={index}>{opcion}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FiltroItem;