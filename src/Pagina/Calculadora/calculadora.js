import {useState} from "react";
import './calculadora.css';

const num =  [1,2,3,4,5,6,7,8,9,0];

function App() {
  const [old,setold] = useState(0);
  const [operacio,setoperacio] = useState("");
  const [display,setdisplay]=useState(0);
  const entraoperacio = (operacio) => {
    setdisplay(0);
    setold(display);
    setoperacio(operacio);
  };
  function clear() {
    setdisplay(0);
         }

  const calcular = () => {
    if(operacio=== "+") setdisplay(old+display);
    if(operacio==="-") setdisplay(old-display);
    if(operacio==="/") setdisplay(old/display);
    if(operacio==="*") setdisplay(old*display);
  }

  
  return (
    <>
    <h1> 8. Calculadora</h1>
      <div className="calculadora">
    <div className="display">{display}</div>
    <div className="numeros">
    {num.map((num) => (
      <button onClick={() => setdisplay(display * 10 +num)}>{num}</button>
    ))}
    </div>
    <div className="butons">
    <button onClick={()=>  entraoperacio("+")}>+</button>
    <button  onClick={()=>  entraoperacio("-")}>-</button>
    <button  onClick={()=>  entraoperacio("*")}>x</button>
    <button onClick={()=>  entraoperacio("/")}>/</button>
    <button onClick={calcular}>=</button>
    <button  onClick={clear}>C</button>
    </div>
   </div>
    
   </>
  );
}

export default App;
