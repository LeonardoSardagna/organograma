import { useState } from 'react';
import Banner from './componentes/banner/banner';
import Formulario from './componentes/formulario/formulario';

function App() {

  const [personagens, setPersonagens] = useState([])

  const novoPersonagem = (personagem) =>{
    console.log(personagem)
    setPersonagens([...personagens, personagem])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario personagemCadastrado ={personagem => novoPersonagem(personagem)}
      />
    </div>
  );
}

export default App;