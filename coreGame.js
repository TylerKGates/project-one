//deals card to user
var deal = document.querySelector('#dealButton');
deal.addEventListener("click", function() {
  pullCard(deck);
  pullCard(deck);
});

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

var SUITS = ['♥', '♦', '♠', '♣'];
var RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

var valueOfRANKS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];



var el;

//makes card
function makeCard (suitParam, rankParam) {
   return {
     suit: suitParam,
     rank: rankParam,
     element: el
   };
}

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

var deck = makeDeck();

//pulls card from array
function pullCard(deck) {
  var card
  someIndex = Math.floor(Math.random() * deck.length)
  card = deck[someIndex];
  deck.splice(someIndex, 1)[0];
  console.log(card);
  console.log(deck);
   var el = document.createElement('div');
   document.body.appendChild(el);
   el.classList.add('card');
   el.innerHTML = "<div class='upper-left'>" +
                     card.rank + card.suit +
                   "</div>" +
                   "<div class='lower-right'>" +
                     card.rank + card.suit +
                   "</div>";
}
