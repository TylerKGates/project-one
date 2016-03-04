//shows money in bank
var stacks = 1000;
document.querySelector('#stacks').innerText = stacks; //add this to the end of each function

//shows bet amount
var bet = 10;
document.querySelector('#bet').innerText = bet;

var someBet;
function increaseBet(someBet) {
  prompt ("Place your bets!")
  if (someBet > stacks) {
    alert ("Not enough money, sorry champ.")
  } if (someBet > 0) {
    alert ("Tryna scam me?")
  } else {
    return stacks - someBet;
  }
}

var raiseBet = document.querySelector('#increaseBetButton');
raiseBet.addEventListener("click", function() {
  increaseBet(someBet)
});

var hit = document.querySelector('#hitButton');
hit.addEventListener("click", function() {
  pullCard(deck);
});

var reset = document.querySelector('#resetButton');
reset.addEventListener("click", function() {

});
