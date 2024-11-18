import ContentMain from "../home/ContentMainTemp";

function MisJuegosPage({owner,juegos}) {
    return (
        <div className="misJuegos-page">
            <h2>mis juegos</h2>
            
            <ContentMain owner ={owner} juegos={juegos} 
         />
        </div>
    );
}

export default MisJuegosPage;