import { useState } from 'react';
import Banner from './componentes/banner/banner';
import Formulario from './componentes/formulario/formulario';

function App() {

  const [personagens, setPersonagens] = useState([])

  const criarPersonagem = (personagem) =>{
    setPersonagens({...personagens, personagem})
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario adicionaPersonagens={personagem => criarPersonagem(personagem)}/>
    </div>
  );
}
export default App;
