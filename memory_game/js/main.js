var cards = [
  {
    rank: "queen", 
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen", 
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king", 
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king", 
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
var cardsInPlay = [];

function randomiseCardOrder(cardArray) {
  for (var i = cardArray.length - 1; i > 0; i--) {
      var randomIndex = Math.floor(Math.random() * (i + 1));
      var toBeSwapped = cardArray[i];
      cardArray[i] = cardArray[randomIndex];
      cardArray[randomIndex] = toBeSwapped;
  };
}

function resetBoard() {
  randomiseCardOrder(cards);
  Array.from(document.querySelector("#game-board").children).forEach(element => element.setAttribute("src", "images/back.png"));
  cardsInPlay = [];
}

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
  resetBoard();
}

function flipCard() {
  var cardId = this.getAttribute("data-id");
  console.log("User flipped " +  cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute("src", cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
    setTimeout(checkForMatch, 350);
  }
}

function createBoard() {
  randomiseCardOrder(cards);
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener('click', flipCard);
    document.querySelector("#game-board").appendChild(cardElement);
  }
}

createBoard();