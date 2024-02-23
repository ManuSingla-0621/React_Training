import React, { useCallback } from 'react'
import {useState} from 'react';
import Child from './Child'



const Callback = () => {
  const [counterOne,setCounterOne]=useState<number>(0);
  const [counterTwo,setCounterTwo]=useState([]);

  const onSubmit=()=>
  {
    setCounterOne(counterOne+1);
  }

  const fun=useCallback(()=>
  {
    console.log("Hi");
  },counterTwo);

  return (
    <div>
         <Child counterTwo={counterTwo} function={fun}/>
        <button onClick={onSubmit}> Click me</button>
        <p>counter -  {counterOne}</p>
    </div>
  )
}

export default Callback