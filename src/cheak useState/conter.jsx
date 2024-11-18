import React, { useState } from 'react'

function conter() {
    const [number , setNumber] = useState(0);

    function increase () {
        setNumber (number + 1) 
    }

    function decrease () {
        setNumber (number - 1)
    }

    function reset () {
        setNumber (number - number)
    }
  return (
    <div>
      <button onClick={ increase }>+</button>
      <h1>{ number }</h1>
      <button onClick={ decrease }>-</button>
      <button onClick={ reset }>reset</button>
    </div>
  )
}

export default conter
