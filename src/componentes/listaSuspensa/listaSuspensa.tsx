import './listaSuspensa.css'

interface ListaSuspensaProps {
label: string
valor: string
alterado:(valor: string) => void
itens: string[]
}

export function ListaSuspensa (props: ListaSuspensaProps) {
    return (
        <div className='listaSuspensa'>
            <label>{props.label}</label>
            <select onChange={evento =>
                props.alterado(evento.target.value)}
                value={props.valor} >
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}> {item} </option>
                })}</select>
        </div>
    )
}
