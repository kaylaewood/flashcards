const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.turns = 0;
    this.deck = deck.cards;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    this.currentCard = this.deck[0];
    this.deck.shift();
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turns++;
    var card = this.returnCurrentCard(this.deck);
    var turn = new Turn(card, guess);
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(card.id);
    }
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    var numberCorrect = this.turns - this.incorrectGuesses.length;
    var percentCorrect = numberCorrect / this.turns * 100;
    return percentCorrect;
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }

};

module.exports = Round;
