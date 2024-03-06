import Botao from "../botao/botao"
import Campotexto from "../campoTexto/campoTexto"
import ListaSuspensa from "../listaSuspensa/listaSuspensa"
import './formulario.css'


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
}

function Formulario() {
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h1>Lista de personagens do Rick And Morty</h1>
                <Campotexto obrigatorio={true} label="Nome" placeholder="Digite o nome do personagem" />
                <Campotexto obrigatorio={true} label="Espécie" placeholder="Digite a espécie" />
                <Campotexto obrigatorio={true} label="Origem" placeholder="Digite a data de origem" />
                <Campotexto obrigatorio={true} label="Imagem" placeholder="Informe o endereço da imagem" />
                <ListaSuspensa label ="Categoria" itens={categoria}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}
//
export default Formulario