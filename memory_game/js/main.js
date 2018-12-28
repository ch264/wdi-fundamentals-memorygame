
var cards = ["queen", "queen", "king", "king"]
var cardsInPlay = [];

var checkForMatch = function () {
	// cards in play should be 0 and 2 or 0 and 1?
	if (cardsInPlay[0] === cardsInPlay[2]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.")
		}
}

var flipCard = function (cardId) {
	//display that card was flipped over
	console.log("User flipped " + cards[cardId]);

	cardsInPlay.push(cards[cardId])

	if (cardsInPlay.length === 2) {
		// call function within function
		checkForMatch();
	}
}
// Call function after it has been defined
flipCard(0);
flipCard(2);
console.log("HI!");