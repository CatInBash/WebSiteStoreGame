import React, { useState } from 'react';

function StarRating({ onRatingChange }) {
  const [rating, setRating] = useState(0); // Guarda la puntuación seleccionada

  // Función para actualizar la puntuación
  const handleRating = (index) => {
    setRating(index); // Actualiza el estado
    if (onRatingChange) {
      onRatingChange(index); // Llama a la función de callback si se proporciona
    }
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleRating(index + 1)}
          style={{
            cursor: 'pointer',
            color: index < rating ? 'gold' : 'gray' // Llena la estrella según el índice
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default StarRating;