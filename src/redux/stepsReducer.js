import {NEXT_STEP, PREV_STEP} from "./types";

const initialState = {
  steps: 0
}

export const stepsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_STEP:
      if (state.steps >= 3) {
        return {
          ...state,
          steps: 0
        }
      } else {
        return {
          ...state,
          steps: state.steps + 1
        }
      }
      case PREV_STEP:
        if (state.steps > 0) {
          return {
            ...state,
            steps: state.steps - 1
          }
        }

    default:
      return state
  }
}