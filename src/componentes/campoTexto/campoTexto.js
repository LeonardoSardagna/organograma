import './campoTexto.css'

const Campotexto = (props) =>{

    const aoDigitar = (evento) =>{
        props.alterado(evento.target.value)
    }

    return(
        <div className= "campo-texto">
            <label>{props.label}</label>
            <input onChange={aoDigitar} value={props.valor} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default Campotexto