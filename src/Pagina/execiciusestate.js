
import { useState } from 'react';
import './App.css';

export default function App() {
  const counter = (state)=> state +1 ;
  const [count,setCount] =useState(0);
  return (
    <>
    <h1>Counter</h1>
    <div>{count}</div>
    <button onClick={() => setCount(counter)}>+1</button>
    
    
    </>
  );
}


