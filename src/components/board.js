import React from 'react'
import './style.css';
import Card from './card'
const uuidv4 = require('uuid/v4')

export default function Board({ cards, flipped, matched, handleClick, disabled }) {
    return (
      <div className="card-container">
        {cards.map((card) => (
          <Card 
            key={uuidv4()}
            id={card.id}
            type={card.type} //which kitty
            // back={card.back}
            // front={card.front}
            width={175}
            height={175}
            flipped={flipped.includes(card.id)}
            matched={matched.includes(card.id)}
            handleClick={handleClick}
            disabled={disabled || matched.includes(card.id)}
            />
      ))}
    </div>
  )
}
