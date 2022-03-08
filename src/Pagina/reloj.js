
import './reloj.css';
import { useEffect, useState } from "react";


const date = new Date();

export default function App() {

  const [mostrarComponente, setMostrarComponente] = useState(true);
 
  const [dateTime, setDateTime] = useState({
    hours: (date.getHours()==0)?23:date.getHours()-1,
    minutes: (date.getMinutes()<9)?"0"+date.getMinutes():date.getMinutes(),
    seconds: (date.getSeconds()<9)?"0"+date.getSeconds():date.getSeconds(),
    dia : date.getDate(),
    mes: date.toLocaleString("ca-CA", { month: "long" }),
    year : date.getFullYear(),
  });
 
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDateTime({
        hours: (date.getHours()==0)?23:date.getHours()-1,
        minutes: (date.getMinutes()<9)?"0"+date.getMinutes():date.getMinutes(),
        seconds : (date.getSeconds()<9)?"0"+date.getSeconds():date.getSeconds(),
        dia : date.getDate(),
        mes: date.toLocaleString("ca-CA", { month: "long" }),
        year : date.getFullYear(),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  
  const fechaComoCadena = date; 
  const dias = [
    'Diumenge',
    'Dilluns',
    'Dimarts',
    'Dimecres',
    'Dijous',
    'Divendres',
    'Disabte',
  ];
  
  const numeroDia = new Date(fechaComoCadena).getDay();
  const nombreDia = dias[numeroDia];
  

  return (
    <div className="App">
      
      <div>
        <h1>{dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}</h1>
        <div className={mostrarComponente ? "show-element" : null}>
        {mostrarComponente && <h1>{nombreDia} , {dateTime.dia} de {dateTime.mes} del {dateTime.year}</h1>}
        </div>
        <button onClick={() => setMostrarComponente(!mostrarComponente)}> 
        {mostrarComponente ? `Ocultar` : `Mostrar`}
        </button>
      </div>
    </div>
  );

  }
  
  



