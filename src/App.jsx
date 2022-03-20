import React, { useState} from 'react';

import './App.css';
import Contato from './pages/Contato';
import Home from './pages/Home';
import Sobre from './pages/Sobre';

function App() {
  const [proximo,setProximo] = useState(0);

function menuProximo(){

    setProximo(proximo+1)
    
   
  }

  


function menu(){

  if(proximo == [0]){
    return <Home/>
  }else if(proximo == [1]){
    return <Sobre/>
  }else if(proximo == [2]){
    return <Contato/>
  }else if(proximo > [2]){
    return setProximo(proximo == [0])
  }
  
  
}
  return (
    <div className="App">

      <header>
        <a onClick={() => setProximo(menuProximo)}>Home</a>
        <a onClick={() => setProximo(menuProximo)}>Sobre</a>
        <a onClick={() => setProximo(menuProximo)}>Contato</a>
      </header>
    
      {menu(proximo)}
     
    </div>
  );
}

export default App;
