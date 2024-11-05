import FiltroItem from "./FiltroItem";
function FiltroOrden(){

    const opcionesOrden =["menor precio","mayor  precio","mejor calificacion ","peor calificaico"]


   return (
      <div className="filtros">
        <h2>Filtros</h2>
        <FiltroItem titulo="Ordenar por" opciones={opcionesOrden} />
        
        
      </div>
    );



}


export default FiltroOrden