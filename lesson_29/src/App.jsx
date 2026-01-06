import './App.css'
import Counter from "./components/Counter.jsx";
import {useDispatch} from "react-redux";
import {decrement, increment} from "./redux/counterSlice.js";

function App() {

  const dispatch = useDispatch();

  return (
    <>
      <Counter />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
}

export default App;
