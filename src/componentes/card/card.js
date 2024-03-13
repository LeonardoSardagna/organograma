import "./card.css"

const Card = ({nome, origem, imagem, corDeFundo, aoDeletar}) =>{
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

export default Card