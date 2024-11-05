import { useState } from "react";


function Componente(){

const[count , setCount]= useState(0)


return(<div>
   <p> camtidad de veces {count} </p>

   <button onClick={()=>setCount(count+1)}>clickea</button>
    



</div>)




}

export default Componente