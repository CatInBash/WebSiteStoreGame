import React from 'react';
import FiltroItem from './FiltroItem';

function Filtros(){
    const opcionesCategoria = ["Acción", "Estrategia", "Carreras", "RPG"];
    const opcionesPrecio = ["Gratis", "Menos de $20", "$20-$50", "Más de $50"];
    const opcionesSistemaOperativo = ["Windows", "MacOS", "Linux"];
    const opcionesIdioma = ["Inglés", "Español", "Francés"];
    const opcionesJugadores =["SinglePlayer","Multiplayer"]
  
    return (
      <div className="filtros">
        <h2>Filtros</h2>
        <FiltroItem titulo="Categoría" opciones={opcionesCategoria} />
        <FiltroItem titulo="Precio" opciones={opcionesPrecio} />
        <FiltroItem titulo="Sistema Operativo" opciones={opcionesSistemaOperativo} />
        <FiltroItem titulo="Idioma" opciones={opcionesIdioma} />
        <FiltroItem titulo="Players" opciones={opcionesJugadores} />
        
      </div>
    );
  }
  
  export default Filtros;