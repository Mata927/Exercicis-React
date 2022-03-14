/* eslint-disable no-unused-expressions */
import { useState } from "react";
import './Graella.css';

const Foto = [
  "https://volemos.nyc3.cdn.digitaloceanspaces.com/blog/wp-content/uploads/2019/03/sagrada-familia.jpg",
  "http://4.bp.blogspot.com/-UsT_KEeJy0I/Vj-GyVEs22I/AAAAAAAAU3Y/lPJrzHHwfBk/s1600/coliseum-monumentos-mas-importantes-de-europa.jpeg",
  "https://volemos.nyc3.cdn.digitaloceanspaces.com/blog/wp-content/uploads/2019/03/Puerta_de_Brandenburgo_berlin.jpg",
  "https://okdiario.com/img/2019/07/25/monumentos-mas-famosos-de-europa-655x368.jpg",       
];

export default function Graella() {
  

  const [fotos, setfotos] = useState(false);
  
  if(fotos)
    return (

      <div className="fotos doble">
         <img src={fotos} onClick={() => setfotos(false)}/>
         </div>
    );
    
  return (
      <div className="App">
        <h1>1. Graella</h1>
      <div className="cuadre">
      {Foto.map((n) => (
                <img className="fotos"
                key={n} 
                src={n} 
                onClick={() =>setfotos(n)}
                />
             ))}
      </div>
      </div>
  );

}

