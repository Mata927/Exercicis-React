import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {increaseCounter,decreaseCounter,reset,getCount} from "./actions/counerActions";


function App() {
  const count = useSelector(getCount);
  const dispatch=useDispatch();


  return (
    <div className="App">
      <h1>Contador Redux</h1>
      <div className="color">
        <br/>
      <div id="num">{count}</div>
      <button onClick={()=> dispatch(increaseCounter(1))}>+1</button>
      <button onClick={()=> dispatch(decreaseCounter(1))}>-1</button>
      <br/>
      <button onClick={()=> dispatch(increaseCounter(5))}>+5</button>
      <button onClick={()=> dispatch(decreaseCounter(5))}>-5</button>
      <br/>
      <button onClick={()=> dispatch(reset())}>RESET</button>
      </div>
    </div>
  );
}

export default App;
