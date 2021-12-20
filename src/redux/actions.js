import {NEXT_STEP, PREV_STEP} from "./types";

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