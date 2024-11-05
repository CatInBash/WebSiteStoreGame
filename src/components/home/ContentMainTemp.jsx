
import EstructuraJuego from "./EstructuraJuegos"
import Filtros from "./Filtros"
import NavBar from "./NavBar"

function ContentMain(){

const juegos= [
    {"title":"halo",
    "image":"1"
},
{"title":"q se yo",
    "image":"2"
}


]

    return(<div className= "ContentMain">


        

        <Filtros/>
        <NavBar/>
        <EstructuraJuego juegos = {juegos}></EstructuraJuego>


        


    </div>
        

        )


}

export default ContentMain