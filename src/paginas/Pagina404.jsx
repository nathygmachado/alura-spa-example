import imagem from "../assets/img/doguito404.svg"
import "../assets/css/404.css"

function Pagina404(){
    return (
        <main className="container flex flex--centro flex--coluna">
            <img className="doguito-imagem" src={imagem} alt="" />
            <p className="naoencontrado-texto">
                Ooops, Essa página não existe!
            </p>
        </main>
    );
}
export default  Pagina404;