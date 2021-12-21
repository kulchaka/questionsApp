import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {incrementStep, inputGet} from "../redux/actions";

const Input = () => {

  const dispatch = useDispatch()

  const [input, setInput] = useState('')
  const [step, setStep] = useState(0)

  const infoSel = useSelector(state => {

    return state.stepsReducer.steps
  })

 const infoStep = useSelector(state => {
    return state.inputReducer.answers[step].answer
  })

  useEffect(() => setInput(infoStep), [infoStep])

  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  const keyPress = (event) => {
    if(event.key === 'Enter') {
      console.log('ENTER')
      dispatch(inputGet(input, step))
      setInput('')
      dispatch(incrementStep())
    }
  }

  useEffect(() => setStep(infoSel), [infoSel])

  return (
      <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyPress={keyPress}/>
  );
};

export default Input;