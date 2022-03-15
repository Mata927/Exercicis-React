import { useState } from "react";
import "./Carrusel.css";
import MostrarBarraInferior from "./MostrarBarraInferior";
import MostrarImatge from "./MostrarImatge";
import carrusel1 from "./Images/carrusel1.jpg";
import carrusel2 from "./Images/carrusel2.jpg";
import carrusel3 from "./Images/carrusel3.jpg";
import carrusel4 from "./Images/carrusel4.jpg";
import carrusel5 from "./Images/carrusel5.jpg";



export default function Carrusel() {
  const imatges = [
    carrusel1,
    carrusel2,
    carrusel3,
    carrusel4,
    carrusel5,
  ];
  const [imatgeActual, setImatgeActual] = useState(imatges[0]);
  const [idActual, setId] = useState(0);

  const cambiarImg = (accio) => {
    idActual + accio >= 0 && idActual + accio <= imatges.length - 1
      ? (setId(idActual + accio), setImatgeActual(imatges[idActual + accio]))
      : null;
  };

  const imatgeClicada = (imatge, clicat) => {
    setImatgeActual(imatge);
    setId(clicat);
  };

  return (
    <>
      <h1>Carrusel</h1>
      <div className="ContenedorCarrusel">
        <button className="Boton" onClick={() => cambiarImg(-1)}>
          {"<"}
        </button>
        <MostrarImatge imatge={imatgeActual} />
        <button className="Boton" onClick={() => cambiarImg(+1)}>
          {">"}
        </button>
        <MostrarBarraInferior
          imatges={imatges}
          id={idActual}
          puntclicat={imatgeClicada}
        />
      </div>
    </>
  );
}