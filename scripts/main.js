const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const deck = [];
const suits = ["hearts", "spades", "clubs", "diamonds"];
const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
const makeDeck = (rank, suit) => {
  const card = {
    rank: rank,
    suit: suit,
    pointValue: rank > 10 ? 10 : rank,
  };
  deck.push(card);
};

for (let suit of suits) {
  for (const rank of ranks) {
    makeDeck(rank, suit);
  }
}

//!!!figure this out!!!
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

window.addEventListener("DOMContentLoaded", () => {
  // Execute after page load
});

const deal = document.getElementById("deal-button")

const newCard = document.createElement("img")
const newCard1 = document.createElement("img")
const newPCard = document.createElement("img")
const newPCard1 = document.createElement("img")

// deal.addEventListener("click",()=> {
//     newCard.setAttribute("src","./images/king_of_hearts.png")
//     dealerHand.appendChild(newCard)
//     // playerHand.appendChild("img")
    
//     newCard1.setAttribute("src","./images/king_of_clubs.png")
//     dealerHand.appendChild(newCard1)

//     newPCard.setAttribute("src","./images/king_of_spades.png")
//     playerHand.appendChild(newPCard)
//     // playerHand.appendChild("img")
    
//     newPCard1.setAttribute("src","./images/king_of_diamonds.png")
//     playerHand.appendChild(newPCard1)
// })

// const hit = document.getElementById("hit-button")
// const hitCard = document.createElement("img")
// const hitCard2 = document.createElement("img")

// hit.addEventListener("click",()=> {
//   hitCard.setAttribute("src","./images/queen_of_spades.png")

//   hitCard2.setAttribute("src","./images/queen_of_spades.png")

//   dealerHand.appendChild(hitCard)
//   playerHand.appendChild(hitCard2)
// })

function dealCards(player){
  for (i=0; i<2; i++){
    const drawnCard = deck.pop();
   
    // console.log("Drawn Card - Rank:", drawnCard.rank, "Suit:", drawnCard.suit);//

    const cardImage = document.createElement("img");

    cardImage.setAttribute("src",`./images/${drawnCard.rank}_of_${drawnCard.suit}.png`);

    player.appendChild(cardImage);
  }
}

deal.addEventListener("click", () => {
  shuffle(deck)
  dealCards(dealerHand)
  dealCards(playerHand)
  // const drawnCard = deck.pop();

  // const cardImage = document.createElement("img");

  // cardImage.setAttribute("src",`./images/${drawnCard.rank}_of_${drawnCard.suit}.png`);

  // dealerHand.appendChild(cardImage)
  // playerHand.appendChild(cardImage)
})

// function calculatePoints(player){
//   let points = sum += rank[i]
//    console.log(playerPoints)
// }

const stand = document.getElementById("stand-button")


// stand.addEventListener("click", ()=> {

// })
//8 
//images{rank}_of_{suit}.png
//function getCardImage 

//11
//function calculatePoints



