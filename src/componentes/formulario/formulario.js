import { useState } from "react"
import Botao from "../botao/botao"
import Campotexto from "../campoTexto/campoTexto"
import ListaSuspensa from "../listaSuspensa/listaSuspensa"
import './formulario.css'

function Formulario(props) {

    const [nome, setNome] = useState("")
    const [origem, setOrigem] = useState("")
    const [imagem, setImagem] = useState("")
    const [Categoria, setCategoria] = useState("")

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.personagemCriado({
            nome,
            origem,
            imagem,
            Categoria
        })
        setNome('')
        setOrigem('')
        setImagem('')
        setCategoria('')
    }

    
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h1>Lista de personagens do Rick And Morty</h1>
                <Campotexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o nome do personagem" 
                    valor={nome}
                    alterado={valor => setNome(valor)}
                />
                <Campotexto 
                    obrigatorio={true} 
                    label="Origem" 
                    placeholder="Lugar de origem, ano" 
                    valor={origem}
                    alterado={valor => setOrigem(valor)}
                />
                <Campotexto 
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem" 
                    valor={imagem}
                    alterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    label ="Categoria" 
                    itens={props.listaCategoria}
                    valor={Categoria}
                    alterado={valor => setCategoria(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}
export default Formulario
