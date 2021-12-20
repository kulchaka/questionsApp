const initialState = {
 questList: [
   {
     id: 1,
     quest: 'Who?',
     answer: ''
   },
      {
     id: 2,
     quest: 'What?',
     answer: ''
   },
      {
     id: 3,
     quest: 'When?',
     answer: ''
   },
      {
     id: 4,
     quest: 'Where?',
     answer: ''
   }
 ]
}

export const questReducer = (state = initialState, action) => {
  return state
}