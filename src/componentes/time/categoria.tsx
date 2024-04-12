import { IPersonagem } from "../../compartilhado/interface/IPersonagem";
import {Card} from "../card/card";
import "./categoria.css"

interface CategoriaProps{
corPrimaria: string
corSecundaria: string
nome: string
personagem: IPersonagem[]
}

export function Categoria (props:CategoriaProps) {

    return(
        props.personagem.length > 0 ? <section className="time" style={{backgroundColor: props.corSecundaria}}>
            
            <h3 style={{color: props.corPrimaria}} >{props.nome}</h3>
            <div className="area_do_time">
                {props.personagem.map(personagens => 
                <Card 
                key={personagens.nome} 
                nome={personagens.nome} 
                origem={personagens.origem} 
                imagem={personagens.imagem} 
                corDeFundo={props.corPrimaria}
                data={personagens.data}
                />
                )}
            </div>
        </section>
        : <></>
    )
}
