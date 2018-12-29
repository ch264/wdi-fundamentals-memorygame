console.log("up2");

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
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
	//display that card was flipped over and push name of card to cardsInPlay array
	console.log("User flipped " + cards[cardId].rank);

	cardsInPlay.push(cards[cardId].rank)

	if (cardsInPlay.length === 2) {
		// call function within function
		checkForMatch();
	}
	// see image path and suit displayed
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}
// Call function after it has been defined
flipCard(0);
flipCard(2);

console.log("test1");
console.log("test2");

