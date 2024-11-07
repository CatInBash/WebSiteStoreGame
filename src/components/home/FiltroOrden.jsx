import FiltroItem from "./FiltroItem";
function FiltroOrden(){

    const opcionesOrden =["menor precio","mayor  precio","mejor calificacion ","peor calificaico"]


   return (
      <div className="OrderBy">
        <h3>Filtrar por</h3>
        <FiltroItem titulo="Ordenar por" opciones={opcionesOrden} />
        
        
      </div>
    );



}


export default FiltroOrden