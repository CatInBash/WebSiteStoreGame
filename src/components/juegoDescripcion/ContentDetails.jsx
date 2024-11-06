import getImageUrl from "../home/utils"
//import "./ContentDetails.css"

function ContentDetails({juego}){


   // getImageUrl(juego)

return(<div className="ContentDetails">
    
    <img src = {getImageUrl(juego)} alt = {juego.title}></img>

    <div className="contentDetailsText">
    <h2>{juego.title}</h2>
    <p>{juego.descripcion}</p>

    <div className="detail-item">
        <label>Género:</label>
        <span>{juego.genero}</span>
    </div>
    
    <div className="detail-item">
        <label>Requerimientos:</label>
        <span>{juego.requerimientos}</span>
    </div>

    <div className="detail-item">
        <label>Requerimientos Recomendados:</label>
        <span>{juego.requerimientosR}</span>
    </div>

    <div className="detail-item">
        <label>Precio:</label>
        <span>{juego.precio}</span>
    </div>
</div>

</div>)


}

export default ContentDetails;