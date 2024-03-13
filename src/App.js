import { useState } from 'react';
import Banner from './componentes/banner/banner';
import Formulario from './componentes/formulario/formulario';
import Categoria from './componentes/time/categoria';
import Rodape from './componentes/rodape/rodape';
import Personagensestaticos from './personagens/personagens';

function App() {

  const [personagens, setPersonagens] = useState([])
  const novoPersonagem = (personagem) =>{
    setPersonagens([...personagens, personagem])
  }

  const categorias = [
    {
      nome:"Humanos normais",
      corPrimaria:"#FFBA05",
      corSecundaria:"#FFF5D9",
    },
    {
      nome:"Alienígenas Bizarros",
      corPrimaria:"#57C278",
      corSecundaria:"#D9F7E9",
    },
    {
      nome:"Criaturas Dimensionais",
      corPrimaria:"#82CFFA",
      corSecundaria:"#E8F8FF",
    },
    {
      nome:"Entidades Cientificas",
      corPrimaria:"#A6D157",
      corSecundaria:"#F0F8E2",
    },
    {
      nome:"Robôs e seres mecânicos",
      corPrimaria:"#F2F2F2",
      corSecundaria:"#A9A9A9 ",
    },
  ]
  
  return (
    <div className="App">
      <Banner/>
      <Formulario listaCategoria = {categorias.map(lista => lista.nome)} personagemCriado={personagem => novoPersonagem(personagem)} />
      {categorias.map(categoria => <Categoria 
      key={categoria.nome} 
      nome={categoria.nome} 
      corPrimaria={categoria.corPrimaria} 
      corSecundaria={categoria.corSecundaria}
      personagem={personagens.filter(personagem => personagem.Categoria === categoria.nome)}
      />)}
      <Personagensestaticos/>
      <footer>
        <Rodape/>
      </footer>
    </div>
  );
}
export default App;
