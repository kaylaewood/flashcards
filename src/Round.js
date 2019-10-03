const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.turns = 0;
    this.deck = deck;
    this.incorrectGuesses = [];
    this.currentCard = this.deck.cards[0];
    this.startTime = Date.now();
  }

  returnCurrentCard() {
      return this.currentCard;
  }

  takeTurn(guess) {
    var turn = new Turn(this.returnCurrentCard(), guess);
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    var feedback = turn.giveFeedback();
    this.deck.cards.shift();
    this.currentCard = this.deck.cards[0];
    this.turns++;
    return feedback;
  }

  calculatePercentCorrect() {
    var numberCorrect = this.turns - this.incorrectGuesses.length;
    var percentCorrect = Math.round(numberCorrect / this.turns * 100);
    return percentCorrect;
  }

  calculateTime() {
    var totalTime = Math.round((Date.now() - this.startTime) / 1000);
    return totalTime;
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly! It took you ${this.calculateTime()} seconds.`);
    return;
  }

};

module.exports = Round;
