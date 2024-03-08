import Card from "../card/card";
import "./categoria.css"

const Categoria = (props) => {
    return(
        props.personagem.length > 0 && <section className="time" style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{color: props.corPrimaria}} >{props.nome}</h3>
            <div className="area_do_time">
                {props.personagem.map(personagem => <Card key={personagem.nome} nome={personagem.nome} origem={personagem.origem} imagem={personagem.imagem}/>)}
            </div>
        </section>
    )
}

export default Categoria;