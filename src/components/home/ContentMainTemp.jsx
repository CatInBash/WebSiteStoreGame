
import EstructuraJuego from "./EstructuraJuegos"
import Filtros from "./Filtros"
import NavBar from "./NavBar"

function ContentMain({juegos}){



    return(<div className= "ContentMain">


        

        <Filtros/>
        <NavBar/>
        <EstructuraJuego juegos = {juegos}></EstructuraJuego>


        


    </div>
        

        )


}

export default ContentMain