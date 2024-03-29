import React from 'react'
import { useState } from 'react';
function useStatetest() {
    const date = new Date();
    const [index,setIndex] = useState(date.getMinutes());

    const up = ()=>{
        setIndex(index+1);
    }
    const down = ()=>{
        setIndex(index-1);
    }
  return (
    <div>
        <button onClick={up}>+1</button>
        <button onClick={down}>-1</button>
        <p>{index}</p>
    </div>
  )
}

export default useStatetest;
