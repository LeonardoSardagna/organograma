import { useState } from "react"
import { Botao } from "../botao/botao"
import {Campotexto} from "../campoTexto/campoTexto"
import {ListaSuspensa} from "../listaSuspensa/listaSuspensa"
import './formulario.css'
import { IPersonagem } from "../../compartilhado/interface/IPersonagem"

interface FormularioProps{
    personagemCriado: (personagem: IPersonagem) => void
    listaCategoria: string[]
}

export function Formulario(props: FormularioProps) {

    const [nome, setNome] = useState("")
    const [origem, setOrigem] = useState("")
    const [imagem, setImagem] = useState("")
    const [Categoria, setCategoria] = useState("")
    const [data, setData] = useState("")

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) =>{
        evento.preventDefault()
        props.personagemCriado({
            nome,
            origem,
            imagem,
            Categoria,
            data
        })
        setNome('')
        setOrigem('')
        setImagem('')
        setCategoria('')
        setData('')
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
                    tipo="text"
                />
                <Campotexto 
                    obrigatorio={true} 
                    label="Origem" 
                    placeholder="Lugar de origem" 
                    valor={origem}
                    alterado={valor => setOrigem(valor)}
                    tipo="text"
                />
                <Campotexto
                    obrigatorio={true}
                    label="Visto pela primeira vez em:"
                    placeholder=""
                    valor={data}
                    alterado={valor => setData(valor)}
                    tipo="date"
                />
                <Campotexto 
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem" 
                    valor={imagem}
                    alterado={valor => setImagem(valor)}
                    tipo="url"
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
