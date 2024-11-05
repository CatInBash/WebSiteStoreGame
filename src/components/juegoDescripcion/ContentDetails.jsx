import getImageUrl from "../home/utils"


function ContentDetails({juego}){


   // getImageUrl(juego)

return(<div className="ContentDetails">
    
    <img src = {getImageUrl(juego)} alt = {juego.title}></img>

    <div className="contentDetailsText">
        
        
        <h2>{juego.title}</h2>
        <p>{juego.descripcion}</p>
        <text>{juego.genero}</text>
        <text>{juego.requerientos}</text>
        <text>{juego.requerimientosR}</text>
        <text>{juego.precio}</text>
    
    </div>

</div>)


}

export default ContentDetails;