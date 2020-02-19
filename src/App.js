import React, { useState, useEffect } from 'react'
import './components/style.css';
import Header from './components/header'
import initializeDeck from './deck'
import Board from './components/board';

function App() {
  const [cards, setCards] = useState([]) 
  const [flipped, setFlipped] = useState([]) 
  const [matched, setMatched] = useState([])
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    setCards(initializeDeck())
  }, []) //empty array will only call once

  const handleClick = (id) => {
    // this.shuffleCards();
    // this.handleFlips(id);
    // console.log(this.state.flipCount)
    setDisabled(true)
    if (flipped.length === 0) {
      setFlipped([id])
      setDisabled(true)
    } else {
      if (checkMatch(id)) return
        setFlipped([flipped[0], id])
      if (isMatch(id)) {
        setMatched([...matched, flipped[0], id])
        resetGame()
      } else {
        setTimeout(resetGame, 2000)
      }
    }
  }

  const checkMatch = (id) => flipped.includes(id)

  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id)
    const flippedCard = cards.find((card) => flipped[0] === card.id)
    return flippedCard.type === clickedCard.type
  }

  //not working
  const resetGame = () => {
    setFlipped([]) //reset to empty array
    setDisabled(false) //reset clicks
  }

  return (
    <>
    <Header />
      <Board 
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        matched={matched}
        disabled={disabled}
      />
    </>
  )
};

export default App