import { useState } from "react"
import Botao from "../botao/botao"
import Campotexto from "../campoTexto/campoTexto"
import ListaSuspensa from "../listaSuspensa/listaSuspensa"
import './formulario.css'

function Formulario(props) {
    const categoria = [
        "Humanos normais",
        "Alienígenas Bizarros",
        "Criaturas Dimensionais",
        "Entidades Cientificas",
        "Robôs e seres mecânicos",
        "Personagens de outras dimensões da realidade"
    ]
    
    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.personagemCadastrado({
            nome,
            origem,
            imagem,
            Categoria,
        })
    }

    const [nome, nomeatualizado] = useState('')
    const [origem, origematualizado] = useState('')
    const [imagem, imagematualizado] = useState('')
    const [Categoria, Categoriaatualizado] = useState('')

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h1>Lista de personagens do Rick And Morty</h1>
                <Campotexto 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite o nome do personagem" 
                valor ={nome}
                alterado={valor => nomeatualizado(valor)}
                />
                <Campotexto 
                obrigatorio={true} 
                label="Origem" 
                placeholder="Lugar de origem, ano" 
                valor ={origem}
                alterado={valor => origematualizado(valor)}
                />
                <Campotexto 
                obrigatorio={true} 
                label="Imagem" 
                placeholder="Informe o endereço da imagem" 
                valor ={imagem}
                alterado={valor => imagematualizado(valor)}
                />
                <ListaSuspensa 
                label ="Categoria" 
                itens={categoria}
                valor ={Categoria}
                alterado={valor => Categoriaatualizado(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}
//
export default Formulario