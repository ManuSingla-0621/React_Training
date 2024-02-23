import React from 'react'
import FirstPage from './Component/FirstPage';
import SecondPage from './Component/SecondPage';
import { useState } from 'react';
import ThirdPage from './Component/ThirdPage';


const App = () => {
  const [pageNumber,setPageNumber]=useState(1);
  return (
    <div>
      <ThirdPage/>
    </div>
  );
}

export default App
