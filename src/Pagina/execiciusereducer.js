
import { useReducer, useState } from 'react';
import './App.css';

export default function App() {
  const [count,dispatch] =useReducer((state,amount)=> state + amount,0);
  return (
    <>
    <h1>Counter</h1>
    <div>{count}</div>
    <button onClick={() => dispatch(+1)}>+1</button>
    <button onClick={() => dispatch(-1)}>-1</button>
    
    </>
  );
}


