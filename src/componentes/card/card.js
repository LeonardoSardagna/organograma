import "./card.css"
import { IoTrashBin } from "react-icons/io5";
function deletar(){
    console.log("Deletado")
}

const Card = ({nome, origem, imagem, corDeFundo}) =>{
    return(
        <div className="personagem">
            <div className="personagem_cabecalho" style={{backgroundColor: corDeFundo}}>
                <IoTrashBin size={25} className="deletar" onClick={deletar}/>
                <img src={imagem}alt={nome}></img>
            </div>
            <div className="personagem_rodape">
                <h4>{nome}</h4>
                <h5>{origem}</h5>
            </div>
        </div>
    )
}

export default Card