import {INPUT, NEXT_STEP, PREV_STEP} from "./types";

export const incrementStep = () => {
  return {
    type: NEXT_STEP
  }
}

export const decrementStep = () => {
  return {
    type: PREV_STEP
  }
}

export const inputGet = (text, id) => {
  return {
    type: INPUT,
    data: {
      id,
      text
    }
  }
}