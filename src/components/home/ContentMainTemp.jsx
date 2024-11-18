
import EstructuraJuego from "./EstructuraJuegos"
import Filtros from "./Filtros"
import NavBar from "./NavBar"
//import "./ContentMain.css"  
function ContentMain({owner,juegos}){



    return(<div className= "main-content">

        <Filtros/>
        <NavBar/>

        
        
        <EstructuraJuego owner={owner} juegos = {juegos}></EstructuraJuego>

    </div>
        

        )


}

export default ContentMain