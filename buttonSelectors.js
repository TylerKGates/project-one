//lowers bet when clicked
var lowerBet = document.querySelector('#decreaseBetButton');
lowerBet.addEventListener("click", function() {
  decreaseBet();
})

//increases bet when clicked
var raiseBet = document.querySelector('#increaseBetButton');
raiseBet.addEventListener("click", function() {
  increaseBet();
});

//adds one more card, run addCardValues so it knows Ace card value if it is pulled.
var hit = document.querySelector('#hitButton');
hit.addEventListener("click", function() {
  pullCard(deck);
  addCardValues();
});

//considering getting rid of this
var stand = document.querySelector('#standButton');
stand.addEventListener("click", function() {
  pullDealerCard(deck);
  stacks += bet 
});
