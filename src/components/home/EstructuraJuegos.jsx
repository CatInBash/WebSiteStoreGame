import FiltroOrden from "./FiltroOrden"
import ContentJuegos from "./ContentJuegos"

function EstructuraJuego({juegos}){


   

    return(<div>

        <FiltroOrden></FiltroOrden>

        <ContentJuegos juegos= {juegos}></ContentJuegos>
       
        
        

         </div>)

}

export default EstructuraJuego