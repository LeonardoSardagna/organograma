import './campoTexto.css'

interface CampoTextoProps{
    label: string
    valor: string
    obrigatorio: boolean
    placeholder: string
    alterado: (valor: string)=>void
    tipo?: 'date' | 'email' | 'number' | 'password' | 'text' | 'url'
}

export function Campotexto ({label,obrigatorio,placeholder,valor, alterado, tipo='text'}:CampoTextoProps) {

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
                placeholder={placeholder}
                type={tipo}
            />
        </div>
    )
}
