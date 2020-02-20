const initialState = {
  countdown: 100,  //start
  flips: 0
};

const reducer = (state = initialState, action) => {
  if (action.type === 'TIME_DECREMENT') {
    return {
      ...state,
      countdown: state.countdown - 1
      }
    }
  else if (action.type === 'COUNT_FLIPS') {
    return {
      ...state,
      flips: state.flips + 1 //increment by 2 / 1 per card?
    }
  }
  return state
}

export default reducer