import ContentDetails from "./ContentDetails"
import ContentPuntuar from "./ContentPuntuar"
function ContentMainDetails(){

 const jueguito={"title":"halo",
    "image":"3",
    "descripcion":"blalbabla",
    "genero":"shooter",
    "requerimientos":"Ryzen 5 bla bla",
    "requerimientosR":"Ryzen 9  bla bla ",
    "precio":"200"
}






    return(<div className= "ContentMain">

        <ContentDetails className="ContentDetails" juego={jueguito}></ContentDetails>

        <ContentPuntuar className="ContentPuntuar" >  </ContentPuntuar>





    </div>)


}

export default ContentMainDetails