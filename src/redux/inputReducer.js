import {INPUT} from "./types";

const initialState = {
  answers: [
    {
      answer: ''
    },
    {
      answer: ''
    },
    {
      answer: ''
    },
    {
      answer: ''
    }
  ]
}


export const inputReducer = (state = initialState, action) => {
  // console.log('action state', action)
  // console.log('state', state)
  switch (action.type) {
    case INPUT:
      return {
        ...state,
        answers: [
            ...state.answers,
          state.answers[action.data.id].answer = action.data.text
        ]
      }
    default:
      return state
  }
}