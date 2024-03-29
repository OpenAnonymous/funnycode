import React from 'react'
import './style.scss'

function Card(props) {
  return (
    <>
        <li key={props.index} className='card-code'>
            <h2>code lam gi do</h2>
            <p>
                content of code
            </p>
        </li>
    </>
  )
}

export default Card
