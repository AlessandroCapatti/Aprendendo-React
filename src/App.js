import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = "Maria"

  return (
    <div className="App">     
    <h1></h1>
      <SayMyName nome="Alessandro"/>
      <SayMyName nome="Capatti"/>
      <SayMyName nome={nome} />
      <Pessoa 
      nome ="Alessandro" 
      idade="27" 
      profissao="Programador" 
      foto="http://via.placeholder.com/150" />
    </div>
  );
}

export default App;
