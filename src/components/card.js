import React from 'react'
import './style.css';

export default function Card({ id, type, flipped, handleClick, 
  matched, height, width }) {
  return (  
    <div className={`card ${flipped ? 'flipped' : ''}`}  
      style={{ height, width }} 
      onClick={() => handleClick(id)}>

      <div className="flipper"> {/*flipper*/}
        <img 
        style={{ height, width }} 
        className={flipped ? "front" : "back"}
        src={flipped || matched ? `${type}` : "back"} />
      </div>
    </div>
  )
}
