const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = null;
    this.cards = [];
  }

  start() {
    for (var i = 0; i < prototypeQuestions.length; i++) {
      var card = new Card(prototypeQuestions[i].id, prototypeQuestions[i].question, prototypeQuestions[i].answers, prototypeQuestions[i].correctAnswer);
      this.cards.push(card);
    }
    const deck = new Deck(this.cards);
    const round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck, round);
    this.printQuestion(round);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

}

module.exports = Game;
