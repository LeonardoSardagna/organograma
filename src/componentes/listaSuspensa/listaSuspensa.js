import './listaSuspensa.css'
const ListaSuspensa = (props) =>{
    return(
        <div className='listaSuspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.alterado(evento.target.value)} value={props.valor} > 
            <option value=""></option>
            {props.itens.map(item => {
                return <option key={item}> {item} </option>
            })}</select>
        </div>
    )
}
export default ListaSuspensa
