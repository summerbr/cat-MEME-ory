import React from 'react'
import './style.css';
import Card from './card'

export default function Board(props) {
    return (
      <div className="board">
        {cards.map((card) => (
          <Card 
            key={card.id}
            id={card.id}
            type={card.type}
            width={100}
            height={100}
            flipped={flipped.includes(card.id)}
            matched={matched.includes(card.id)}
            handleClick={handleClick}
            disabled={disabled || matched.includes(card.id)}
            />
      ))}
    </div>
  )
}
