import { IPersonagem } from "../../compartilhado/interface/IPersonagem"
import "./card.css"

export interface CardProps extends IPersonagem{
    corDeFundo:string
}

export function Card ({nome, origem, imagem, corDeFundo}:CardProps){
    return(
        <div className="personagem">
            <div className="personagem_cabecalho" style={{backgroundColor: corDeFundo}}>
                <img src={imagem}alt={nome}></img>
            </div>
            <div className="personagem_rodape">
                <h4>{nome}</h4>
                <h5>{origem}</h5>
            </div>
        </div>
    )
}
