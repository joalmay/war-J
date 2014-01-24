$(document).ready(function() {

	//War Card Game - Project

	//Function to Convert Greater Values to Jack, Queen or King
	function convert_value_to_string(value) {
		if (value > 10) {
			switch (value) {
				case 11:
				return 'Jack';
				break;
				case 12:
				return 'Queen';
				break;
				case 13:
				return 'King';
				break;
			}
		}
		return value.toString();
	}

	//Create the Deck
	var deck = [];
	var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
	for (var i = 0; i<suits.length; i++) {
		var suit = suits[i];
		for (var j = 0; j<13; j++) {
			deck.push({number: j+1, suit: suit});
		}
	}
	
	//Shuffle the deck
	deck = _.shuffle(deck);
	console.log("Deck Before Split:"+deck.length);
	
	var cards_player_1 = [];
	var cards_player_2 = [];
	//divide out the cards into the two arrays
	
	cards_player_1 = deck.splice(0,26);
	cards_player_2 = deck;

	console.log("Deck Player 1 => "+cards_player_1.length);

	console.log("Deck Player 2 => "+cards_player_2.length);
	/*
	_.each(deck, function(card) {

    }*/


	//create a function (algorithm) called "war" that takes two cards as parameters, compares them and returns a winner. A tie should return false.
	function war(card1, card2) {
		var numberCard1 = card2.number;
		var numberCard2 = card1.number;

		console.log("Number Player 1 => "+numberCard1);
		console.log("Number Player 2 => "+numberCard2);

		if(numberCard1 > numberCard2){
			//Player 1 Win
			return 1;
		} else if(numberCard1 < numberCard2) {
			//Player 2 Win
			return 2;
		} else {
			//Draw
			return false;
		}
	}
	
	
	//create a play function
		//compare the cards
		//give the winner both cards (at end of deck)
	function play() {
		var card1 = _.first(cards_player_1);
		var card2 = _.first(cards_player_2);
		//compare the cards

		console.log(card1);
		console.log(card2);

		var winner=war(card1, card2);

		switch (winner) {
				case 1:
				//give the winner both cards (at end of deck)
				cards_player_1.push(card1);
				cards_player_1.push(card2);
				break;

				case 2:
				//give the winner both cards (at end of deck)
				cards_player_2.push(card1);
				cards_player_2.push(card2);
				break;

				//Draw
				default:
				alert("Draw");
			}	
		
		//this function (defined below) will continue to the next turn
		advance();
	}
	
	function advance() {
		//take the top two cards and display them
		if (cards_player_1.length) {
			var card_1 = cards_player_1[0];
			var card_2 = cards_player_2[0];
			$("#opp-card").html(convert_value_to_string(card_1.number)+" "+card_1.suit);
			$("#opp-card-count").html(cards_player_1.length);
			$("#my-card").html(convert_value_to_string(card_2.number)+" "+card_2.suit);
			$("#my-card-count").html(cards_player_2.length);
			
		}
	}
	advance();
	
	$(".btn").click(function() {
		play();
	});
});