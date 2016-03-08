//shows money in bank
var stacks = 1000;
document.querySelector('#stacks').innerText = stacks; //add this to the end of each function

//shows bet amount
var bet = 0;
document.querySelector('#bet').innerText = bet;

//player move that starts with an alert.
var turn;
function playerMove(turn) {
  turn = alert ("Your turn, place your bet then hit the deal cards button!")
}
playerMove(turn);

//increases bet
var someBet;
function increaseBet(someBet) {
  someBet = prompt ("Place your bets!");
  if (someBet > stacks) {
    alert ("Not enough money, sorry champ.");
  } if (someBet <= 0) {
    alert ("Tryna scam me?");
  } else {
    stacks = stacks - someBet;
    bet = + someBet;
  };
  document.querySelector('#stacks').innerText = stacks;
  document.querySelector('#bet').innerText = bet;
  return bet;
}
someBet = bet;
//decreases bet
var minusBet;
var subtract;
function decreaseBet(minusBet) {
  bet = prompt ("Not feelin' so lucky? Decrease your bet!");
  if ( (bet > stacks) || (bet<=0) ) {
    alert ("Can't do that.");
    return
  } else {
    stacks = stacks + (1000 - stacks - bet);
  }
  document.querySelector('#stacks').innerText = stacks;
  document.querySelector('#bet').innerText = bet;
  return bet;
}

//shows dealer's bank
var dealerStacks = 1000;
document.querySelector('#houseStacks').innerText = dealerStacks;
