import { useState } from "react";
import './App.css';

export default function App() {
  const [color, setColor] = useState("greenyellow");
  const Pres = color !== "greenyellow";

  const toggle = () => {
    if (color === "greenyellow") setColor("red");
    else setColor("greenyellow");
  };
  return (
    <div className="App">
      <h1>5. Toggle Button *17F</h1>
      <div className="Cuadro">
        <br />
      <button style={{ background: color }} onClick={toggle}>
        Dame por favor
      </button>
      < br />
      < br />
      {Pres ? <p>Esta Prendido</p> : <p>No esta Prendido</p>}
      </div>
    </div>
    
  );
}


