import CardJuego from "./CardJuego"

function ContentJuegos({owner,juegos}){
    
    const handleCardClick = (juegoId) => {
        navigate(`/juegoDescripcion/${juegoId}`);  // Cambia el ID de la ruta según tu configuración
    };

    return(
        <div className= "gallery-container">

            {owner? juegos.map((juego)=>(
                <CardJuegoOwner key={juego.id} juego = {juego} onClick ={() =>handleCardClickOwner(juego)} ></CardJuegoOwner>
                


            ))
            
            : juegos.map((juego)=>(
                <CardJuego key={juego.id} juego = {juego} onClick= {() => handleCardClickOwner(juego)} ></CardJuego>
                
            ))}

           
        </div>

    )


}

export default ContentJuegos