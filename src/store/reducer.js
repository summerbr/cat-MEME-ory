const initialState = {
  countdown: 60,  
  flips: 0
};

const reducer = (state = initialState, action) => {
  if (action.type === 'TIME_DECREMENT') {
    return {
      ...state,
      countdown: state.countdown - 1
      }
    }
  if (action.type === 'COUNT_FLIPS') {
    return {
      ...state,
      flips: state.flips + 1 
    }
  } else if (action.type === 'RESET') {
    return {
      initialState
    }
  }
  return state
}

export default reducer