import CardJuego from "./CardJuego"

function ContentJuegos({juegos}){
    


    return(
        <div calssName= "gallery-container">

            {juegos.map((juego)=>(
                <CardJuego key={juego.id} juego = {juego} ></CardJuego>
            ))}
        </div>

    )


}

export default ContentJuegos