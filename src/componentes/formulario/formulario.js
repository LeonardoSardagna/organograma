import Campotexto from "../campoTexto/campoTexto"
import './formulario.css'
function Formulario() {
    return (
        <section className="formulario">
            <form>
                <Campotexto label="Nome" placeholder="Digite seu nome" />
                <Campotexto label="Cargo" placeholder="Digite seu cargo" />
                <Campotexto label="Imagem" placeholder="Informe o endereço da imagem" />
                <Campotexto label="Time" />
            </form>
        </section>
    )
}
//
export default Formulario