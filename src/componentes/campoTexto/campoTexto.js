import './campoTexto.css'

const Campotexto = (props) =>{

    const aoDigitar = (evento) =>{
        props.alterar(evento.target.value)
    }

    return(
        <div className= "campo-texto">
            <label>{props.label}</label>
            <input onChange={aoDigitar} value={props.value} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}
export default Campotexto