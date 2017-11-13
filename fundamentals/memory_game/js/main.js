console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
console.log("User flipped " + cardOne);
cardsInPlay.push(cardOne); 
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log(cardsInPlay);

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!"); 
	} 
	else {
	alert("Sorry, try again"); 
	}

}

if (cardsInPlay.length === 2) {
	checkForMatch();
}
