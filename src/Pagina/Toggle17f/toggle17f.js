import { useState } from "react";
import './toggle17f.css';

export default function Toggle17F() {
  const [color, setColor] = useState("greenyellow");
  const Pres = color !== "greenyellow";

  const boton = () => {
    if (color === "greenyellow") setColor("red");
    else setColor("greenyellow");
  };
  return (
    <div className="App">
      <h1>4. Toggle Button *17F</h1>
      <div className="Cuadro">
        <br />
      <button style={{ background: color }} onClick={boton}>
        Dame por favor
      </button>
      < br />
      < br />
      {Pres ? <p>Esta Prendido</p> : <p>No esta Prendido</p>}
      </div>
    </div>
    
  );
}


