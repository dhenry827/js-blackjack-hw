const arr = ['dog', 'cat', 'dragon', 'slingacademy.com', 'banana'];

// define a function that can be reused
const shuffleArray = (array) => {
  // create a copy of the array so that the original array is not mutated
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// use the function
const shuffledArray = shuffleArray(arr);
console.log(shuffledArray);

function shuffleDeck(array){
    for (let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
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
        
    }
}