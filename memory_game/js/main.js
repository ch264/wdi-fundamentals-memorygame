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
	if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.")
		}
}

var flipCard = function () {
	// use getAttribute method to get data-id attribute of the card that was clicked 
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank)
	// use setAttribute to update src attribute to the image of the card that was just clicked
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		// call function within function
		checkForMatch();
	}

	//display that card was flipped over and push name of card to cardsInPlay array
	console.log("User flipped " + cards[cardId].rank);
	// display that card was flipped over and push name of card to cardsInPlay array
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();


