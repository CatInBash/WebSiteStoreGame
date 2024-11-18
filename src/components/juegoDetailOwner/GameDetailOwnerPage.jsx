

function GameDetailOwnerPage({ onModify, onDelete, onPublish, onUnpublish,user}) {
    return (
      <div>
        <h1>CarX Street</h1>
        <p>Visualizaciones: 240</p>
        <p>Tasa de conversión: 20%</p>
        <p>Ventas: 12</p>
        <p>Wishlist: 22</p>
        <button onClick={() => onModify("1")}>Modificar</button>
        <button onClick={() => onDelete("1")}>Eliminar</button>
        <button onClick={() => onPublish("1")}>Publicar</button>
        <button onClick={() => onUnpublish("1")}>Despublicar</button>
      </div>
    );
  }
  export default GameDetailOwnerPage