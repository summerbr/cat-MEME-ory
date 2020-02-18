import React, { useState, useEffect } from 'react'
import Board from './components/board'
import initializeDeck from './deck'

export default function App() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([]) 
  const [matched, setMatched] = useState([])
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    setCards(initializeDeck())
  }, []) //will only be called once

  const handleClick = (id) => {
    setDisabled(true)
    if (flipped.length === 0) {
      setFlipped([id])
      setDisabled(true)
    } else {
      if(checkMatch(id)) return
      setFlipped([flipped[0], id])
      if (isMatch(id)) {
        setMatched([...matched, flipped[0], id]) //id of just clicked
        resetGame()
      } else {
        setTimeout(resetGame, 2000)
      }
    }
  }
  const checkMatch = (id) => flipped.includes(id) //only allows you to click 2x 

  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id)
    const flippedCard = cards.find((card) => flipped[0] === card.id)
    return flippedCard.type === clickedCard.type
  }

  const resetGame = () => {
    setFlipped([]) //reset flipped cards
    setDisabled(false) //reset clicks
  }

  return (
    <div>
      <h1>Cat-MEME-ory</h1>
      <Board 
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        matched={matched}
      />
    </div>
  );
}
