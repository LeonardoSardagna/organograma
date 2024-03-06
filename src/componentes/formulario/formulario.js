import Campotexto from "../campoTexto/campoTexto"
import ListaSuspensa from "../listaSuspensa/listaSuspensa"
import './formulario.css'

const VivoOuMorto = [
    "Vivo",
    "Morto"
]

function Formulario() {
    return (
        <section className="formulario">
            <form>
                <h1>Lista de personagens do <img className="imagemLogo" src="./imagens/Rick_and_Morty_logo.png"></img> </h1>
                <Campotexto label="Nome" placeholder="Digite o nome do personagem" />
                <Campotexto label="Espécie" placeholder="Digite a espécie" />
                <Campotexto label="Origem" placeholder="Digite a data de origem" />
                <Campotexto label="Imagem" placeholder="Informe o endereço da imagem" />
                <ListaSuspensa label= "Vivo ou Morto?" itens={VivoOuMorto}/>
            </form>
        </section>
    )
}
//
export default Formulario