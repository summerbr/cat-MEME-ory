import React from 'react'

export default function header({ countdown, flips }) {
  return (
  <>
    <h1>CAT MEME-ORY</h1>
    <div className="game-header">
      <div>
        <span>TIME: {countdown}</span>
      </div>
    <div>
      <span>FLIPS: {flips}</span>
    </div>
    </div>
  </>
  )
}
