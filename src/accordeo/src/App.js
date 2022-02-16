import { useState } from "react";
import Titol from './Titol.js';
import './App.css';

export default function App() {
  const [selected,setSelected]=useState(null);
  const[clicka]=useState(selected);

  const toggle = (i) => {
    if(selected === i){
      return setSelected(null)
    }
    setSelected(i);
  }
  const acordeo=[ {
    id: 1,title: "Titol 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a consequat nibh. Mauris suscipit arcu at fermentum convallis. Pellentesque consectetur mi in felis maximus posuere."
  },
  {
    id: 2, title : "Titol 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie tellus a maximus tempus. Duis vel leo iaculis, porttitor erat et, posuere erat. Ut blandit."
  },
  {
    id: 3, title: "Titol 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia, nibh imperdiet tempus pharetra, arcu risus aliquet arcu, a auctor ex lacus efficitur purus. Morbi."
  },
  {
    id : 4,title: "Titol 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat lobortis nibh, eu molestie est placerat non. Donec ornare nisl erat, non imperdiet elit porta."
  },
  {
  id: 5,title: "Titol 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat lobortis nibh, eu molestie est placerat non. Donec ornare nisl erat, non imperdiet elit porta."
  }
];

  return (
    <div className="wrapper">
      <Titol acordeo={acordeo} toggle={toggle} clicka={clicka}/> 
      </div>
  );

}

