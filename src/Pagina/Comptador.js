import { useState } from "react";
import './Comptador.css';

export default function App() {
  const [count, setCount] = useState(0);
  const valor1=1;
  const valor2=5;
  const valor3=-1;

  const increment = (valor) => {
     if (count+valor <=10   && count+valor  >=0 ){
    setCount(count + valor);
  };
};
  return (
    <div className="App">
     <h1>Contador</h1>
     <div className="cuadrado">
     <div className="numero">
      <h1 className="result">{count}</h1>
      </div>
      <div>
          <button className="gray" id="tira1" onClick={()=>increment(valor1)}>
            +{valor1}
          </button>
          <button className="gray" id="tira1" onClick={()=>increment(valor3)}>
          {valor3}
          </button>
     </div> 
     <div>
          <button className="gray" id="tira2" onClick={()=>increment(valor2)}>
          +{valor2}
          </button>
    </div>
    </div> 
    </div> 
  );
}


