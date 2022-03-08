import "./Redux.css";
import { useDispatch, useSelector } from "react-redux";
import {increaseCounter,decreaseCounter,reset,getCount} from "./actions/counterActions";


function App() {
  const count = useSelector(getCount);
  const dispatch=useDispatch();


  return (
    <div className="App">
      <h1>6. Contador Redux</h1>
      <div className="color">
        <br/>
      <div id="num">{count}</div>
      <br/>
      <button id="button" onClick={()=> dispatch(increaseCounter(1))}>+1</button>
      <button id="button"onClick={()=> dispatch(decreaseCounter(1))}>-1</button>
      <br/>
      <button id="button" onClick={()=> dispatch(increaseCounter(5))}>+5</button>
      <button id="button" onClick={()=> dispatch(decreaseCounter(5))}>-5</button>
      <br/>
      <button id="button" onClick={()=> dispatch(reset())}>RESET</button>
      </div>
    </div>
  );
}

export default App;
