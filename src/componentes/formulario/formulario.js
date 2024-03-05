import Campotexto from "../campoTexto/campoTexto"
import './formulario.css'


function Formulario() {
    return (
        <section className="formulario">
            <form>
                <h1>Lista de personagens do Rick and Morty.</h1>
                <Campotexto label="Nome" placeholder="Digite o nome do personagem" />
                <Campotexto label="Espécie" placeholder="Digite a espécie" />
                <Campotexto label="Origem" placeholder="Digite a data de origem" />
                <Campotexto label="Imagem" placeholder="Informe o endereço da imagem" />
            </form>
        </section>
    )
}
//
export default Formulario