const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.turns = 0;
    this.deck = deck;
  }

  returnCurrentCard(deck) {
    this.currentCard = deck.cards[0];
    deck.cards.shift();
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turns++;
    var turn = new Turn(this.returnCurrentCard(this.deck), guess);
    return turn;
  }

  calculatePercentCorrect() {

  }

  endRound() {

  }

};

module.exports = Round;
