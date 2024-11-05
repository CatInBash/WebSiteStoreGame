
import getImageUrl from "./utils"

function CardJuego ({juego}){

  
    


    return (<div className="game-card">
        <img src= {getImageUrl(juego)}alt={juego.title} className="game-image" 
        width={160}
        height={200}/>
        
      </div>
       
        
        
        
   
        )

    

}

export default  CardJuego;