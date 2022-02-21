import { useState } from "react";
import './Accordeo.css';


export default function Accordeo() {
  const [selected,setSelected]=useState(null);
  
  const toggle = (i) => {
    if(selected === i){
      return setSelected(null)
    }
    setSelected(i);
  }
  
  const acordeo=[ {
  title: "Titol 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a consequat nibh. Mauris suscipit arcu at fermentum convallis. Pellentesque consectetur mi in felis maximus posuere."
  },
  {
  title : "Titol 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie tellus a maximus tempus. Duis vel leo iaculis, porttitor erat et, posuere erat. Ut blandit."
  },
  {
  title: "Titol 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia, nibh imperdiet tempus pharetra, arcu risus aliquet arcu, a auctor ex lacus efficitur purus. Morbi."
  },
  {
  title: "Titol 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat lobortis nibh, eu molestie est placerat non. Donec ornare nisl erat, non imperdiet elit porta."
  },
  {
  title: "Titol 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat lobortis nibh, eu molestie est placerat non. Donec ornare nisl erat, non imperdiet elit porta."
  }
];

  return (
    <>
    <h1>4. Accordeo</h1>
  <div className="wrapper">
  
      <div className='accordio'>
        {acordeo.map((n,i) => (
          <div className='objecto'>
             <div className='titulo' onClick={ () => toggle(i)}>
              <h1>{n.title}</h1>
              <span>{selected === i ? '-' : '+'}</span>
             </div>
                <div className={selected === i ? 'contenido show' : 'contenido' }>
                  {n.description}
                  </div>            
                </div>
            ))}
            </div>
            </div>
            </> 
      
    );

}

