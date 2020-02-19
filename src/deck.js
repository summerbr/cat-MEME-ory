import catnip from './components/images/catnip.jpeg'
import coffee from './components/images/coffee.jpg'
import grumpy from './components/images/grumpy-cat-bird.jpeg'
import meow from './components/images/meow.jpeg'
import nike from './components/images/nike.jpeg'
import haters from './components/images/haters.jpg'
import office from './components/images/office.jpeg'
import testes from './components/images/testes.jpeg'

require ('dotenv').config() 

// async function getCats() {
//   let url = `https://api.thecatapi.com/v1/images/search?limit=8&api_key=${process.env.REACT_APP_GOOGLE_API_KEY}`
//   let response = await fetch(url)
//   let results = await response.json()

//   let imageURLs = results.map(item => {
//     return item.url
//   })
//   console.log(imageURLs)
//   // return imageURLs
// }

function shuffle(arr) {
  const deck = [...arr]
  for (let i = 0; i < deck.length - 1; i++) {
    let randomIndex = Math.floor(Math.random() * (i + 1))
    let temp = deck[i]
    deck[i] = deck[randomIndex]
    deck[randomIndex] = temp
  }
  return deck
}

export default function initializeDeck() {
  let id = 0
  const cards = [catnip, coffee, grumpy, 
    meow, office, testes, nike, haters
  ].reduce((acc, type) => {
      acc.push({
        id: id++,
        type
      })
      acc.push({
        id: id++,
        type
      })
      return acc
    }, []);
  return shuffle(cards)
  // console.log(shuffle(cards))
}
