const initialState = {
  seconds: 60,  
  flips: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TIME_DECREMENT':
      return {
        ...state,
        seconds: state.seconds - 1
        }
    case 'COUNT_FLIPS':
      return {
        ...state,
        flips: state.flips + 1 
      }
    case 'RESET_ALL':
      return {
        ...state,
        seconds: initialState.seconds,
        flips: initialState.flips
      }
  }
  return state
}

export default reducer