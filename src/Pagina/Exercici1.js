
import './Exercici1.css';

export default function Exercici1() {

  const num =[63,45,58,56];
  
 
  function Sumar(numero){
    let suma=0;
    num.forEach(function(num) {
      suma += num;
    });
    return (<h1>La suma es: {suma}</h1>);
  }
  function Media(numero) {
    let promig=0;
    var i = 0, summ = 0, ArrayLen = num.length;
    while (i < ArrayLen) {
        summ = summ + num[i++];
        promig=summ / ArrayLen;
}
    return (<h1>El Promig es: {promig}</h1>) ;
}

function Menor(numero){
  let menor=num[0];
  for (let i=0;i<10;i++){
    if(num[i]<menor){
      menor = num[i];
    }
  }
  return (<h1>El Menor es: {menor}</h1>) ;
}
function Mayor(numero){
  let mayor=num[0];
  for (let i=0;i<10;i++){
    if(num[i]>mayor){
      mayor = num[i];
    }
  }
  return (<h1>El Mayor es: {mayor}</h1>) ;
}


  return (
    <div className='App'>
      <h1>6. Exercici 1 de Arrays</h1>
      <h2>{num}</h2>
      <Sumar numero={num}/> 
      <Media numero={num}/>   
      <Menor numero={num}/>
      <Mayor numero={num}/>
      </div>
  );
}
