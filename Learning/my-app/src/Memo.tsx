import React from 'react'
import { useState } from 'react';
import { useMemo } from 'react';

const Memo = () => {
  const[counterOne , setCounterOne] = useState<number>(0);
  const[counterTwo , setCounterTwo] = useState<number>(0);

  const onSubmitOne=()=>{
    setCounterOne(counterOne+1);
  }

  const onSubmitTwo=()=>{
    setCounterTwo(counterTwo+1);
  }

   const isEven = ()=>{let i =0;
    while(i<2000000000)
    {
    i++;
    }
    return counterOne%2===0;};
 

  return (
    <>
    <button onClick={onSubmitOne}>Click One</button>
    <p>CounterOne : {counterOne}</p>
    <span>{isEven()?"Even":"Odd"}</span>
    <button onClick={onSubmitTwo}>Click Two</button>
    <p>CounterTwo : {counterTwo}</p>
    </>
  )
}

export default Memo