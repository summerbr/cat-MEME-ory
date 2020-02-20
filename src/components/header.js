import React from 'react'
import { connect } from 'react-redux'

function header(props) {
  return (
  <>
    <h1>CAT MEME-ORY</h1>
    <div className="game-header">
      <div>
        <span>TIME: {props.countdown}</span>
      </div>
    <div>
      <span>FLIPS: {props.flips}</span>
    </div>
    </div>
  </>
  )
}

//displays
const mapStateToProps = (state) => {
  return {
    countdown: state.countdown,
    flips: state.flips
  }
}

//updates
// const mapDispatchToProps = (dispatch) => {
//   return {
//     startCountdown: () => dispatch({ type: 'TIME_DECREMENT' }),
//     flipTotal: () => dispatch({ type: 'COUNT_FLIPS' })
//   }
// }

export default connect(mapStateToProps)(header)