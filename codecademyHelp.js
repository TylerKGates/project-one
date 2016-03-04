var randomValue = Math.random() * 10;

function twoRandomScores() {
 var score1 = Math.random() * 10;
 var score2 = Math.random() * 10;
 var scores = score1, score2;
 return scores
};   //might have to break this up into two scores

var randomScore = Math.random() * 52;

console.log('I got the score ' + randomScore);

var deal = Math.random() * 52;
var final = deal % 13;
console.log(final);
// numbers between 1-13 = hearts
// numbers between 14-26 = diamonds
// numbers between 27-39 = clubs
// numbers between 40-52 = spades

var outcome
deal = Math.random() * 40;
   if (deal % 2 === 0) {
    outcome = "even"
} else {
    outcome = "odd"
};
