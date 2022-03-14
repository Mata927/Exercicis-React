import Comptador from "./Comptador/Comptador";
import Accordeo from "./Accordeo/Accordeo";
import Graella from "./Graella/Graella";
import Toggle17F from "./toggle17f/toggle17f";
import Exercici1 from "./Ejercici1/Exercici1";
import Redux from "./Redux/Redux";
import Reloj from "./reloj/reloj";
import Calculadora from "./Calculadora/calculadora";
import Carrusel from "./Carrusel/Carrusel";
import Group17f from "./Group17f/Group17f";
import Sumador from "./sumadornumeros/sumadornumeros";
import Tresenraya from "./tresenraya/tresenraya";


const llista = [
  { path: "graella", titol: "Graella de fotos", element: <Graella /> },
  { path: "comptador", titol: "Comptador", element: <Comptador /> },
  { path: "accordeo", titol: "Accordeo", element: <Accordeo /> },
  { path: "toggle17f", titol: "Toggle17F", element: <Toggle17F /> },
  { path: "exercici1", titol: "Vectors Enters", element: <Exercici1 /> },
  { path: "redux", titol: "Redux", element: <Redux /> },
  { path: "reloj", titol: "Reloj", element: <Reloj/>},
  { path: "carrusel", titol: "Carrusel", element: <Carrusel/>},
  { path: "group17f", titol: "Group17f", element: <Group17f/>},
  { path: "calculadora", titol: "Calculadora", element: <Calculadora/>},
  { path: "sumador", titol: "Sumador de Numeros", element: <Sumador/>},
  { path: "tresenraya", titol: "Tres en raya", element: <Tresenraya/>}
];

export default llista;