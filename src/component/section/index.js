import React from 'react'
import '../section/style.scss'
import Card from './card-component';

function Section() {
  let code = ["code1", "code2", "code3", "code4", "code5", "code6", "code7", "code8"];
  return (
    <div className='main-section'>
        <ul>
             {code.map((item,index)=>{
                return <Card item={item} index={index}/>
             })}
        </ul>
        <h1>hết..</h1>
    </div>
  )
}

export default Section;
