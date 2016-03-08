//variables for game
var SUITS = ['♥', '♦', '♠', '♣'];
var RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var cardsOnTable = [];
var dealersCards = [];
var deck = makeDeck();
var el;


//shuffles deck
function shuffle (someArray) {
 var temp = [];
 for (var i = 0; i < someArray.length; i++) {
   temp[i] = someArray[i];
}
var currentIndex = 0;
while (temp.length > 0) {
   var someIndex = Math.floor(Math.random() * temp.length);
   var nextValue = temp.splice(someIndex, 1)[0];
   someArray[currentIndex] = nextValue;
   currentIndex += 1;
 }
}

//makes card
function makeCard (suitParam, rankParam) {
    var val;
    //sets value to cards
    if (rankParam === 'A') {
      val = 0;
    } else if (rankParam === 'J' || rankParam === 'Q' || rankParam === 'K') {
      val = 10;
    } else {
      val = parseInt(rankParam);
    };
   return {
     value: val,
     suit: suitParam,
     rank: rankParam,
     element: el
  };
};

//makes deck
function makeDeck () {
   var deck = [];
   for (var i = 0; i < SUITS.length; i++) {
     for (var j = 0; j < RANKS.length; j++) {
     deck.push(makeCard(SUITS[i], RANKS[j]));
     }
   }
   return deck;
}

//makes card appear on screen
function renderCard(card) {
  var el = document.createElement('div');
  var playerCardContainer;
  playerCardContainer = document.querySelector('#playerCardContainer');
  playerCardContainer.appendChild(el);
  el.classList.add('card');
  el.innerHTML = "<div class='upper-left'>" +
                    card.rank + card.suit +
                  "</div>" +
                  "<div class='lower-right'>" +
                    card.rank + card.suit +
                  "</div>";
}

//resets cards on table and reshuffles deck
function restartGame() {
  cardsOnTable = [];
  dealersCards = [];
  console.log(dealersCards)
  deck = makeDeck();
  setTimeout(function(){ document.querySelectorAll('.card').remove() ; }, 50)
  setTimeout(function(){ document.querySelectorAll('.compCard').remove() ; }, 50)
}

// REMOVE ELEMENTS FUNCTION FOUND ON STACKOVERFLOW (user: Johan Dettmar)
Element.prototype.remove = function() {
  this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
  for(var i = this.length - 1; i >= 0; i--) {
    if(this[i] && this[i].parentElement) {
      this[i].parentElement.removeChild(this[i]);
    }
  }
} //END OF STACKOVERFLOW FUNCTION

// function winOrLose(playerTotal, dealerTotal){
//   if (playerTotal > dealerTotal) {
//     alert("You win!");
//   }
//   else if (dealerTotal >= playerTotal) {
//     alert("House always wins!");
//   };
// };
