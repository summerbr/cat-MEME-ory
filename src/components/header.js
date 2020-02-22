import React from 'react'
import { connect } from 'react-redux'

function header(props) {
  return (
  <>
    <div className="header">
      <h1>CAT MEME-ORY</h1>
        <div className="header-info">
        <div>
          <span>TIME: {props.countdown}</span>
        </div>
         <div>
          <span>FLIPS: {props.flips}</span>
        </div>
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

export default connect(mapStateToProps)(header)