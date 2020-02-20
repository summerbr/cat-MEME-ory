import React, { useState, useEffect } from 'react'
import Header from './components/header'
import initializeDeck from './deck'
import Board from './components/board';
import './components/style.css'

import { connect } from 'react-redux'

function App(props) {
  const [cards, setCards] = useState([]) 
  const [flipped, setFlipped] = useState([]) 
  const [matched, setMatched] = useState([])
  const [disabled, setDisabled] = useState(false)
  const [intervalId, setCatInterval] = useState(0)


  useEffect(() => {
    setCards(initializeDeck())
  }, []) //empty array will only call once

  const handleClick = (id) => {
    //reassign global state to local to prevent re-render
    let ctr = props.countdown

    if(intervalId == 0) {
      let timerId  =  window.setInterval(() => {
        props.startCountdown()
        ctr -= 1 
        console.log(timerId)
        if(ctr == 0) {
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
        // setFlips(...flips, +1)
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
      totalFlips: () => dispatch({ type: 'COUNT_FLIPS' })
    }
  }

  //displays
  const mapStateToProps = (state) => {
    return {
      countdown: state.countdown,
      flips: state.flips
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App)