var lowerBet = document.querySelector('#decreaseBetButton');
lowerBet.addEventListener("click", function() {
  decreaseBet();
})

var raiseBet = document.querySelector('#increaseBetButton');
raiseBet.addEventListener("click", function() {
  increaseBet();
});

var hit = document.querySelector('#hitButton');
hit.addEventListener("click", function() {
  pullCard(deck);
});

var reset = document.querySelector('#resetButton');
reset.addEventListener("click", function() {

});
