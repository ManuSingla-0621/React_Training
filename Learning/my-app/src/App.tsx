import React from 'react'
import { useState } from 'react'
import Memo from './Memo';
import Callback from './Callback';

const App = () => {

   const[counter,setCounter] = useState<number>(0);

   const onSubmit=()=>{
    setCounter(counter+1);
   }

  return (
    <>
    <button onClick={onSubmit}>ClickMe</button>
    <p>Counter:{counter}</p>
    {/* <Memo/> */}
    </>
    // <>
    // <Callback/>
    // </>
  )
}

export default App