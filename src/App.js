import React, { useState, useEffect } from 'react-redux'
import {connect} from 'react'
import Header from './components/header'
import initializeDeck from './deck'
import Board from './components/board';

function App() {
  const [cards, setCards] = useState([]) 
  const [flipped, setFlipped] = useState([]) 
  const [matched, setMatched] = useState([])
  const [disabled, setDisabled] = useState(false)
  const [countdown, setCountdown] = useState(100)
  const [flips, setFlips] = useState(0)

  useEffect(() => {
    setCards(initializeDeck())
  }, []) //empty array will only call once

  // useEffect(() => {
  //   setTimeout(() => {

  //   })
  // })

  const handleClick = (id) => {
    setDisabled(true)
    if (flipped.length === 0) {
      setFlipped([id])
      setDisabled(true)
    } else {
      if (checkMatch(id)) return
        setFlipped([flipped[0], id]) //creates flipped array
        // setFlips(...flips, +1)
      if (isMatch(id)) { //or time runs out ?
        setMatched([...matched, flipped[0], id])
        resetCards()
      } else {
        console.log('else triggered')
        setTimeout(resetCards, 2000)
      }
    }
  }

  const checkMatch = (id) => flipped.includes(id)

  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id)
    const flippedCard = cards.find((card) => flipped[0] === card.id)
    return flippedCard.type === clickedCard.type
  }

  const resetCards = () => {
    setFlipped([]) //reset to empty array
    setDisabled(false) //reset clicks
  }

  const resetGame = () => {
    setFlipped([])
    setMatched([])
    setDisabled(false)
  }

  return (
    <>
      <Header 
      countdown={countdown}
      flips={flips}
      />
      <Board 
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        matched={matched}
        disabled={disabled}
      />
      <button 
        style={{   
          padding: '0',
          backgroundColor: 'blue',
          color: 'white',
          borderStyle: 'groove',
          borderRadius: '12px',
          fontSize: '1em',
          height: '50px',
          display: 'block',
          margin: 'auto',
          minWidth: '150px' 
        }}
        onClick={resetGame}>RESET</button>
    </>
  )
};

export default App