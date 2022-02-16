import { useState } from "react";
import './App.js';
import './App.css';
export default function Titol(props) {

  const [selected,setSelected]=useState(null);

  const toggle = (i) => {
    if(selected === i){
      return setSelected(null)
    }
    setSelected(i);
  }
    return (
      <div className="wrapper">
      <div className='accordio'>
        {props.acordeo.map((n,i) => (
          <div className='objecto'>
             <div className='titulo' onClick={ () => toggle(i)}>
              <h1>{n.title}</h1>
               <span>{selected === i ? '-' : '+'}</span>
             </div>
                <div className='contenido'>{n.description}</div>            
                </div>
            ))}
            </div>
     </div>
    );

}
  
    
