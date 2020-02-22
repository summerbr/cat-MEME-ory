import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Header from './components/header'
import initializeDeck from './deck'
import Board from './components/board';
import './components/style.css'

function App(props) {
  const [cards, setCards] = useState([]) 
  const [flipped, setFlipped] = useState([]) 
  const [matched, setMatched] = useState([])
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    setCards(initializeDeck())
  }, []) //empty array will only call once

  const [intervalId, setCatInterval] = useState(0)

  const handleClick = (id) => {
    //start countdown
    let timer = props.seconds
    if(intervalId == 0) {
      let timerId  =  window.setInterval(() => {
        props.startCountdown()
        timer -= 1 

        if(timer == 0) {
          //stop timer once it reaches 0
          window.clearInterval(timerId)
        }
      }, 1000)
      setCatInterval(timerId)
    }
    
    setDisabled(true) 
    if (flipped.length === 0) {
      setFlipped([id])
      setDisabled(true)
    } else {
      if (checkMatch(id)) return
        setFlipped([flipped[0], id]) //creates flipped array
      if (isMatch(id)) { //or time runs out ?
        setMatched([...matched, flipped[0], id])
        resetCards()
      } else {
        props.totalFlips()
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
    setFlipped([]) //reset to empty array if no match
    setDisabled(false) //reset clicks
  }

  const resetGame = () => {
    setFlipped([])
    setMatched([])
    setDisabled(false)
    props.resetAll() //reset flips
    window.clearInterval(intervalId)//reset timer
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
      <button onClick={resetGame}>RESET</button>
    </>
  )
};

  //updates
  const mapDispatchToProps = (dispatch) => {
    return {
      startCountdown: () => dispatch({ type: 'TIME_DECREMENT' }),
      totalFlips: () => dispatch({ type: 'COUNT_FLIPS' }),
      resetAll: () => dispatch({ type: 'RESET_ALL' })
    }
  }

  //displays
  const mapStateToProps = (state) => {
    return {
      seconds: state.seconds,
      flips: state.flips
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App)