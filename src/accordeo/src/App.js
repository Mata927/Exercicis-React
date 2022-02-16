
import './App.css';

export default function App() {
 
  function Titol({titols}) {
    return (
      <>
          <ul>
          const recorreArray = (titols) => {
        for(let i=0; i<=llibreria.length-1; i++){
      console.log(llibreria[i]);
  }
}
          </ul>
      </>
    );
  
  const llibreria=[{
    "title": "Titol 1",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a consequat nibh. Mauris suscipit arcu at fermentum convallis. Pellentesque consectetur mi in felis maximus posuere."
  },
  {
    "title": "Titol 2",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie tellus a maximus tempus. Duis vel leo iaculis, porttitor erat et, posuere erat. Ut blandit."
  },
  {
    "title": "Titol 3",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia, nibh imperdiet tempus pharetra, arcu risus aliquet arcu, a auctor ex lacus efficitur purus. Morbi."
  },
  {
    "title": "Titol 4",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat lobortis nibh, eu molestie est placerat non. Donec ornare nisl erat, non imperdiet elit porta."
  },
  {
  "title": "Titol 5",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat lobortis nibh, eu molestie est placerat non. Donec ornare nisl erat, non imperdiet elit porta."
  }
];


  return (
    <div className="App">
      <Libro titols={llibreria}/> 
      </div>
  );
}


