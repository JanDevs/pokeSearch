import logo from './logo.svg';
import './App.css';
import {useState} from "react";


function MyButton({txt}){

  return(
      <button>
        {txt}
      </button>
  );
}

function MyNav(){
  return (
      <nav>
        <MyButton txt={"Primer Botón"}/>
        <MyButton txt={"Segundo botón"}/>
      </nav>
  );
}



function App() {
  return (
    <div className="App">
        <MyNav />
    </div>
  );
}

export default App;
