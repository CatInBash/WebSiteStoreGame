import StarRating from "./StarRating";
import React, { useState } from 'react';

function ContentPuntuar(){
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleRatingChange = (newRating)=> {
        setRating(newRating)
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value); // Actualiza el comentario
      };

      const handleSubmit = () => {
        // Aquí puedes manejar el envío de la puntuación y el comentario
        console.log('Puntuación:', rating);
        console.log('Comentario:', comment);
      };


    return(<div className="ContentPuntuar">

        <button type="submit">comprar</button>
        <StarRating onRatingChange={handleRatingChange}></StarRating>
        <button type="submit" onClick={handleSubmit}>enviar</button>
        <input placeholder="Comentario" 
        
                value={comment}
                onChange={handleCommentChange}/> 

        


         </div>)
}
export default ContentPuntuar