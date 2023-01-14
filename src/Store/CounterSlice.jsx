import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      const {firstNum,secondNum} = action.payload
      state.value += Number(firstNum) + Number(secondNum)
    },
    decrement: (state, action)=> {
        const {firstNum,secondNum} = action.payload
        state.value += Number(firstNum) - Number(secondNum)
    },
    incrementByAmount: (state, action) => {
        const {firstNum,secondNum} = action.payload
        state.value += Number(firstNum) * Number(secondNum)
    },
  },
})


export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer