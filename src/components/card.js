import React from 'react'
import './style.css';

export default function Card({ id, type, flipped, handleClick, 
  matched }) {
  return (  
    <div className={`card ${flipped ? 'flipped' : ''}`}  
      onClick={() => handleClick(id)}>

      <div className="flipper">
        <img 
        className={flipped ? "front" : "back"}
        src={flipped || matched ? `${type}` : null } />
      </div>
    </div>
  )
}
