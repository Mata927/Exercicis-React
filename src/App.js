import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "./Pagina/Layout.js";
import Accordeo from "./Pagina/Accordeo.js";
import Comptador from "./Pagina/Comptador.js";
import Graella from "./Pagina/Graella.js";
import Toggle17F from "./Pagina/toggle17f.js"
import Home from "./Pagina/Home.js";
import './App.css';



export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout />}>
         <Route index element={<Home />} />
         <Route path="Accordeo" element={<Accordeo />} />
         <Route path="Comptador" element={<Comptador />} />
         <Route path="Graella." element={<Graella />} />
         <Route path="toggle17f" element={<Toggle17F />} />
       </Route>
     </Routes>
   </BrowserRouter>
    </div>
  );
}


