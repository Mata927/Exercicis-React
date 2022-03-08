import Comptador from "./Comptador";
import Accordeo from "./Accordeo";
import Graella from "./Graella";
import Toggle17F from "./toggle17f";
import Exercici1 from "./Exercici1";
import Redux from "./Redux/Redux";
import Reloj from "./relojdigital/src/reloj.js";


const llista = [
  { path: "graella", titol: "Graella de fotos", element: <Graella /> },
  { path: "comptador", titol: "Comptador", element: <Comptador /> },
  { path: "accordeo", titol: "Accordeo", element: <Accordeo /> },
  { path: "toggle17f", titol: "Toggle17F", element: <Toggle17F /> },
  { path: "exercici1", titol: "Exercici1", element: <Exercici1 /> },
  { path: "redux", titol: "Redux", element: <Redux /> },
  { path: "reloj", titol: "Reloj", element: <Reloj/>}
];

export default llista;