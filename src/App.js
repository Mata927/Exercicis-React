import {HashRouter,Routes,Route} from "react-router-dom";
import Layout from "./Pagina/Layout.js";
import Accordeo from "./Pagina/Accordeo.js";
import Comptador from "./Pagina/Comptador.js";
import Graella from "./Pagina/Graella.js";
import Toggle17F from "./Pagina/toggle17f.js";
import Exercici1 from "./Pagina/Exercici1.js";
import Home from "./Pagina/Home.js";
import './App.css';
import Redux from "./Pagina/Redux/Redux";



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
         <Route path="toggle17f" element={<Toggle17F />} />
         <Route path="Exercici1" element={<Exercici1 />} />
         <Route path="Redux" element={<Redux />} />
       </Route>
     </Routes>
   </HashRouter>
    </div>
  );
}


