/* eslint-disable no-unused-expressions */
import { useState } from "react";
import './Graella.css';
import Fotos from "./imagenes.js";


export default function App() {
  
  const Foto = [
          "https://volemos.nyc3.cdn.digitaloceanspaces.com/blog/wp-content/uploads/2019/03/sagrada-familia.jpg",
          "http://4.bp.blogspot.com/-UsT_KEeJy0I/Vj-GyVEs22I/AAAAAAAAU3Y/lPJrzHHwfBk/s1600/coliseum-monumentos-mas-importantes-de-europa.jpeg",
          "https://volemos.nyc3.cdn.digitaloceanspaces.com/blog/wp-content/uploads/2019/03/Puerta_de_Brandenburgo_berlin.jpg",
          "https://okdiario.com/img/2019/07/25/monumentos-mas-famosos-de-europa-655x368.jpg",       
  ];

  const [buttonText, setButtonText] = useState("Fotos");
  const [foto, setfotos] = useState(Foto);

  // eslint-disable-next-line no-unused-vars
  const changeText = () => {
    buttonText === "cuadre"
      ? (setButtonText(foto), setfotos("Fotos"))
      : (setButtonText("V"));
  }
  return (
    <div className="App">
      <h1>Galeria de Fotografias</h1>
      if("foto"==="cuadre"){
      <div className="cuadre">
      <Fotos graella={Foto}/>
      </div>
}else{
   <Fotos graella={Foto} className="fotos.doble"/>
}
    </div>
  );
}


