require ('dotenv').config() 

async function getCats() {
  let url = `https://api.thecatapi.com/v1/images/search?limit=8&api_key=${process.env.REACT_APP_GOOGLE_API_KEY}`
  let response = await fetch(url)
  let results = await response.json()

  let imageURLs = results.map(item => {
    return item.url
  })
  return imageURLs
  // console.log(imageURLs)
}

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

export default async function initializeDeck() {
  let id = 0
  const cards = await getCats()
    .then(cats => cats.reduce((acc, type) => {
      acc.push({
        id: id++,
        type
      })
      acc.push({
        id: id++,
        type
      })
      return acc
    }, []));
  return shuffle(cards)
  // console.log(shuffle(cards))
}
