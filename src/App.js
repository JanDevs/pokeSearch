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
      <header className="App-header">
        <p>
          <MyNav />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
