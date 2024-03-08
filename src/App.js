import { useState } from 'react';
import Banner from './componentes/banner/banner';
import Formulario from './componentes/formulario/formulario';
import Categoria from './componentes/time/categoria';

function App() {

  const [personagens, setPersonagens] = useState([])

  const novoPersonagem = (personagem) =>{
    setPersonagens({...personagens, personagem})
    console.log(personagem)
  }

  const categorias = [
    {
      nome:"Humanos normais",
      corPrimaria:"",
      corSecundaria:"",
    },
    {
      nome:"Alienígenas Bizarros",
      corPrimaria:"",
      corSecundaria:"",
    },
    {
      nome:"Criaturas Dimensionais",
      corPrimaria:"",
      corSecundaria:"",
    },
    {
      nome:"Entidades Cientificas",
      corPrimaria:"",
      corSecundaria:"",
    },
    {
      nome:"Robôs e seres mecânicos",
      corPrimaria:"",
      corSecundaria:"",
    },
  ]
  
  return (
    <div className="App">
      <Banner/>
      <Formulario personagemCriado={personagem => novoPersonagem(personagem)} />
      {categorias.map(categoria => <Categoria nome={categoria.nome} corPrimaria={categoria.corPrimaria} corSecundaria={categoria.corSecundaria} />)}
    </div>
  );
}
export default App;
