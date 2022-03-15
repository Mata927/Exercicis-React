import {HashRouter,Routes,Route} from "react-router-dom";
import Layout from "./Pagina/Layout.js";
import Accordeo from "./Pagina/Accordeo/Accordeo.js";
import Comptador from "./Pagina/Comptador/Comptador.js";
import Graella from "./Pagina/Graella/Graella.js";
import Toggle17F from "./Pagina/Toggle17f/toggle17f.js";
import Exercici1 from "./Pagina/Ejercici1/Exercici1.js";
import Home from "./Pagina/Home.js";
import Redux from "./Pagina/Redux/Redux.js";
import Reloj from "./Pagina/Reloj/reloj.js";
import Calculadora from "./Pagina/Calculadora/calculadora";
import Carrusel from "./Pagina/Carrusel/Carrusel.js";
import Group17f from "./Pagina/Group17f/Group17f.js";
import Sumador from "./Pagina/Sumadornumeros/sumadornumeros.js";
import Tresenraya from "./Pagina/Tresenraya/tresenraya.js";
import './App.css';





export default function App() {
  return (
    <div className='App'>
      <HashRouter>
     <Routes>
       <Route path="/" element={<Layout />}>
         <Route index element={<Home />} />
         <Route path="Accordeo" element={<Accordeo />} />
         <Route path="Comptador" element={<Comptador />} />
         <Route path="Graella" element={<Graella />} />
         <Route path="Toggle17f" element={<Toggle17F />} />
         <Route path="Exercici1" element={<Exercici1 />} />
         <Route path="Redux" element={<Redux />} />
         <Route path="Reloj" element={<Reloj />} />
         <Route path="Calculadora" element={<Calculadora />} />
         <Route path="Carrusel" element={<Carrusel />} />
         <Route path="Group17f" element={<Group17f />} />
         <Route path="Sumador" element={<Sumador />} />
         <Route path="Tresenraya" element={<Tresenraya />} />
       </Route>
     </Routes>
   </HashRouter>
    </div>
  );
}


