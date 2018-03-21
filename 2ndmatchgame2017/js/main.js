// Global Variables
// An array with the cards we'll be working with
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var numberOfMoves = 0;
var matches = 0;

// Shuffle function
function shuffleCards() {
  // While there remain elements to shuffle...
  for (var i = cards.length - 1; i > 0; i--) {
    // Generate a random index
    var randomIndex = Math.floor(Math.random() * (i + 1));
    // Swap the card at the current index with the card at the random index
    var tempCard = cards[i];
    cards[i] = cards[randomIndex];
    cards[randomIndex] = tempCard;
  }
}

// Student Code
function createBoard() {
  shuffleCards();

  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.setAttribute('class', cards[i]);
    document.getElementById('game-board').appendChild(cardElement);
    cardElement.addEventListener('click', flipOverCard);
  }
}

function flipOverCard() {
  if (cardsInPlay.length === 2) {
    turnFaceDown();
    cardsInPlay = [];
  }

  this.innerHTML = '<img src= "images/king.png"  alt="king"' , "images/queen.png"  alt="queen"+ this.getAttribute('class') + '.png>';
  cardsInPlay.push(this);

  if (cardsInPlay.length === 2) {
    numberOfMoves++;
    document.getElementById('attempts').innerHTML = numberOfMoves;
    isMatch();
  }
}

function isMatch() {
  var success = document.getElementById('success');

  if (cardsInPlay[0].getAttribute('class') === cardsInPlay[1].getAttribute('class')) {
    success.innerHTML = 'You found a match!';
    cardsInPlay = [];
    matches++;

    if (matches === cards.length / 2) {
      handleEndOfGame();
    }
  } else {
    success.innerHTML = 'Try again.';
  }
}

function turnFaceDown() {
  for (var i = 0; i < cardsInPlay.length; i++) {
    cardsInPlay[i].innerHTML = '';
  }
}

function handleEndOfGame() {
  document.getElementById('success').innerHTML = 'Congratulations! You matched all cards in ' + numberOfMoves + ' moves.';
}

function resetGame() {
  cardsInPlay = [];
  numberOfMoves = 0;
  matches = 0;

  document.getElementById('game-board').innerHTML = '';
  document.getElementById('attempts').innerHTML = numberOfMoves;
  document.getElementById('success').innerHTML = 'Click two cards to start.';

  turnFaceDown();
  createBoard();
}

document.getElementById('reset').addEventListener('click', resetGame);

createBoard();