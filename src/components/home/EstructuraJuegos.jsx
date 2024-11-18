import FiltroOrden from "./FiltroOrden"
import ContentJuegos from "./ContentJuegos"
//import "./EstructuraJuego.css"
function EstructuraJuego({owner,juegos}){


   

    return(<div className="EstructuraJuego">

        <FiltroOrden></FiltroOrden>

        <ContentJuegos owner= {owner} juegos={juegos}></ContentJuegos>
       
        
        

         </div>)

}

export default EstructuraJuego