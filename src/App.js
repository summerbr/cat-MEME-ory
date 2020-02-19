// import React, { useState, useEffect } from 'react'
// import Board from './components/board'
// import initializeDeck from './deck'

// export default function App() {
//   const [cards, setCards] = useState([])
//   const [flipped, setFlipped] = useState([]) 
//   const [matched, setMatched] = useState([])
//   const [disabled, setDisabled] = useState(false)

//   useEffect(() => {
//     setCards(initializeDeck())
//   }, []) //will only be called once

//   useEffect(() => {
//     preloadImages()
//   }, cards)

//   const handleClick = (id) => {
//     setDisabled(true)
//     if (flipped.length === 0) {
//       setFlipped([id])
//       setDisabled(true)
//     } else {
//       if(checkMatch(id)) return
//       setFlipped([flipped[0], id])
//       if (isMatch(id)) {
//         setMatched([...matched, flipped[0], id]) //id of just clicked
//         resetGame()
//       } else {
//         setTimeout(resetGame, 2000)
//       }
//     }
//   }
//   const checkMatch = (id) => flipped.includes(id) //only allows you to click 2x 

//   const isMatch = (id) => {
//     const clickedCard = cards.find((card) => card.id === id)
//     const flippedCard = cards.find((card) => flipped[0] === card.id)
//     return flippedCard.type === clickedCard.type
//   }

//   const preloadImages = () => {
//     cards.map((card) => {
//       const src = `/img/${card.type}.png`
//       new Image().src = src
//     })
//   }

//   const resetGame = () => {
//     setFlipped([]) //reset flipped cards
//     setDisabled(false) //reset clicks
//   }

//   return (
//     <div>
//       <h1>Cat-MEME-ory</h1>
//       <Board 
//         cards={cards}
//         flipped={flipped}
//         handleClick={handleClick}
//         disabled={disabled}
//         matched={matched}
//       />
//     </div>
//   );
// }

import React, { Component } from 'react'
import Card from './components/card';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      cards: ['🐱‍👤', '🐱‍🏍', '🐱‍🚀', '🐱‍👓', '🐱‍🐉', '🐱‍💻'],
      flipped: [],
      matched: [],
      // flips: 0,
      // time: 100,
      disabled: false
    }
  };


  handleClick = id => {
    this.shuffleCards();
    // this.handleFlips(id);
    // console.log(this.state.flipCount)
  }

  handleFlips = id => {
    console.log('later!')
  }

  render() {
    return (
      <div class="board"> 
      {this.state.cards.map((card) => (
        <Card
          key={card.key}
          id={card.id}
          image={card.image} //pull from api???
          clicked={this.state.clicked}
          handleClick={this.state.handleClick}
          // handleFlips = {this.state.handleFlips}
          type={card.type}
          />
        ))}
      </div>
  )}
}

export default App
