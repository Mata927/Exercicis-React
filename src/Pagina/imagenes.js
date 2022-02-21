
export default function fotos({graella}){
  let v="";
  return(
        <>
        
        {graella.length > 0 ? (
             v= graella.map((n) => (
                <img 
                className="fotos" 
                alt="" 
                key={n} 
                src={n}/>
              ))
          ) : (
            <img 
                className="fotos" 
                alt="" 
                key={v} 
                src={v}/>
  
          )}
        </>
    );
}

