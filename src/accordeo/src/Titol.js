import './App.js';
import './App.css';
export default function Titol(props) {

    return (
      <div className='accordio'>
        {props.acordeo.map((n,i) => (
          <div className='objecto'>
             <div className='titulo' onClick={ () => props.toggle(i)}>
              <h1>{n.title}</h1>
               <span>{props.clicka === i ? '-' : '+'}</span>
             </div>
                <div className='contenido'>{n.description}</div>            
                </div>
            ))}
            </div>
    );

}
  
    
