import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrementStep, incrementStep} from "../redux/actions";

const Button = (props) => {

  const dispatch = useDispatch()

  const handleNextButton = () => {
    dispatch(incrementStep())
  }

  const handlePrevButton = () => {
    dispatch(decrementStep())
  }

  return (
      <>
        <button onClick={handlePrevButton}>Prev</button>
        <button onClick={handleNextButton}>Next</button>
      </>
  );
};

export default Button;