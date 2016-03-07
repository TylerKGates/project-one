//deals card to user
var deal = document.querySelector('#dealButton');
deal.addEventListener("click", function() {
  pullCard(deck);
  pullCard(deck);
  pullDealerCard(deck);
  pullDealerCard(deck);
  stacks += bet;
});

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

//adds one more card when clicked, run addCardValues so it knows Ace card value if it is pulled.
var hit = document.querySelector('#hitButton');
hit.addEventListener("click", function() {
  pullCard(deck);
  addCardValues();
});

//when clicked, adds card for dealer's turn.
var stand = document.querySelector('#standButton');
stand.addEventListener("click", function() {
  pullDealerCard(deck);
  stacks += bet
});
