import './campoTexto.css'

interface CampoTextoProps{
    label: string
    valor: string
    obrigatorio: boolean
    placeholder: string
    alterado: (valor: string)=>void
}

export function Campotexto ({label,obrigatorio,placeholder,valor, alterado}:CampoTextoProps) {

    const aoDigitar = (evento:React.ChangeEvent<HTMLInputElement>) => {
        alterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input
                onChange={aoDigitar}
                value={valor}
                required={obrigatorio}
                placeholder={placeholder} />
        </div>
    )
}
