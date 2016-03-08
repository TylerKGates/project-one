//ALL DEALER FUNCTIONS
function renderCompCard(card) {
var compCard = document.createElement('div');
var dealerCardContainer;
dealerCardContainer = document.querySelector('#dealerCardContainer');
dealerCardContainer.appendChild(compCard);
compCard.classList.add('compCard')
compCard.innerHTML = "<div class='upper-left'>" +
                  card.rank + card.suit +
                "</div>" +
                "<div class='lower-right'>" +
                  card.rank + card.suit +
                "</div>";
}

//essentially same as hitOrBust, but for dealer
function dealerHitOrBust() {
var cardValues = addDealerValues()
if (cardValues > 21) {
  alert ("Dealer has Busted!");
  // stacks -= someBet;
  restartGame();
} else if (cardValues === 21) {
  alert ("House always wins!")
  // stacks += someBet
  restartGame();
}
// winOrLose();
}

//separate function for dealer's hand
function pullDealerCard(deck) {
var dealerCard;
someIndex = Math.floor(Math.random() * deck.length);
dealerCard = deck[someIndex];
//determines whether the ace card will be 1 or 11.
sum = addDealerValues();
if (dealerCard.rank === 'A') {
  if (sum + 11 > 21) {
    dealerCard.value = 1;
  } else {
    dealerCard.value = 11;
  }
};
deck.splice(someIndex, 1)[0];
dealersCards.push(dealerCard.value);
renderCompCard(dealerCard);
dealerHitOrBust();
}

function addDealerValues() {
var total = 0;
for(var i = 0; i < dealersCards.length; i++){
  total += dealersCards[i];
};
return total;
};
// var dealerTotal = addDealerValues();
