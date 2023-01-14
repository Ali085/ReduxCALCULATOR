import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount,bolme } from '../../Store/CounterSlice'

function CountCountroller() {
    const firstNum = useRef()
    const secondNum = useRef()

    const dispatch = useDispatch()

  return (
        <>

        <input type="number" ref={firstNum} />
        <input type="number" ref={secondNum}  />
        <button onClick={()=>{dispatch(increment({firstNum:firstNum.current.value,secondNum:secondNum.current.value}))}}>+</button>
        <button onClick={()=>{dispatch(decrement({firstNum:firstNum.current.value,secondNum:secondNum.current.value}))}}>-</button>
        <button onClick={()=>{dispatch(incrementByAmount({firstNum:firstNum.current.value,secondNum:secondNum.current.value}))}}>*</button>
        
        </>
  )
}

export default CountCountroller