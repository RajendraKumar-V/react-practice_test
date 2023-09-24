import logo from "./logo.svg";
import "./App.css";
import { addToCart } from "./redux/action";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const product ={
    name:'I-Phone',
    type:'mobile',
    color:'black'
  }
  return (
    <div className="App">
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
    </div>
  );
}

export default App;
