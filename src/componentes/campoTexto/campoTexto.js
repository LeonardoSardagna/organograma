import './campoTexto.css'

const Campotexto = (props) =>{
    return(
        <div className= "campo-texto">
            <label>{props.label}</label>
            <input placeholder={props.placeholder}/>
        </div>
    )
}

export default Campotexto