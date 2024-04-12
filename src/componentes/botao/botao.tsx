import { ComponentProps } from 'react'
import './botao.css'

interface BotaoProps extends ComponentProps<'button'> {
    children: string
}

export function Botao({ children, ...props }: BotaoProps) {
    return (
        <button {...props}
            className='botao'>
            {children}
        </button>
    )
}
