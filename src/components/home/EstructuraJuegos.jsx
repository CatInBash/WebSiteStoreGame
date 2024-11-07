import FiltroOrden from "./FiltroOrden"
import ContentJuegos from "./ContentJuegos"
//import "./EstructuraJuego.css"
function EstructuraJuego({juegos}){


   

    return(<div className="EstructuraJuego">

        <FiltroOrden></FiltroOrden>

        <ContentJuegos juegos= {juegos}></ContentJuegos>
       
        
        

         </div>)

}

export default EstructuraJuego