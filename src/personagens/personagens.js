import "./personagens.css"
import { useEffect } from "react"
import { useState } from "react"

const Personagensestaticos = () =>{
    const [perso, setperso] = useState([])
    useEffect(() => {
        const dados = async() =>{
            const resposta = await fetch('https://rickandmortyapi.com/api/character')
            const data = await resposta.json()
            setperso(data.results)
        }
        dados()
    }, [])
    return(
        
        <div className="container">
            <h1>Personagens</h1>
            <div className="containerPersonagens">
                {perso.map((personagem, index) =>{
                    return(
                        <div className="containerdescricao" key={index}>
                            <img src={personagem.image} alt={personagem.name}></img>
                            <div>
                                <h4>{personagem.name}</h4>
                                <p>{personagem.species}</p>
                            </div> 
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Personagensestaticos