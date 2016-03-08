//pulls card from array
function pullCard(deck) {
  var card;
  someIndex = Math.floor(Math.random() * deck.length);
  card = deck[someIndex];
//determines whether the ace card will be 1 or 11.
  sum = addCardValues();
  if (card.rank === 'A') {
    if (sum + 11 > 21) {
      card.value = 1;
    } else {
      card.value = 11;
    }
  };
  deck.splice(someIndex, 1)[0];
  cardsOnTable.push(card.value);
  renderCard(card);
  hitOrBust();
}

//adds card values together.
function addCardValues() {
  var total = 0;
  for(var i = 0; i < cardsOnTable.length; i++){
    total += cardsOnTable[i];
};
  return total;
};
// var playerTotal = addCardValues();


//determines whether or not the player's card value is over 21 or not.
function hitOrBust() {
  var cardValues = addCardValues()
  if (cardValues > 21) {
    alert ("Bust!");
    stacks -= someBet;
  } else if (cardValues === 21) {
    alert ("21!")
    // bet = bet + stacks;
  }
}
