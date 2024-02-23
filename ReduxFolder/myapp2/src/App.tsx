import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { incNumber, decNumber } from "./actions/incremDecrem";
import { manualSelector } from './reducers/updown';

function App() {
  
  /// avoid any, use selector ask with ritesh
  const myState=useSelector(manualSelector)
  const dispatch = useDispatch();
  return (

    <>
    <div className = "container">
     
     <h1>Increment/Decrement counter</h1>
     <h4>using React and Redux</h4>


     <div className = "quantity">
     <button onClick={() => dispatch(incNumber())}>Increment</button>
      <input  type="text"value={myState}  />
      <button onClick={() => dispatch(decNumber())}>Decrement</button>
     </div>

    </div>
    </>
  );
}

export default App;
