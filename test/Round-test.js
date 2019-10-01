const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {

  it('Round should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('returnCurrentCard should be a function', function() {
    const round = new Round();
    expect(round.returnCurrentCard).to.be.a('function');
  });

  it('returnCurrentCard should return first card in array', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round();
    expect(round.returnCurrentCard(deck)).to.equal(card1);
  });

  it('takeTurn should be a function', function() {
    const round = new Round();
    expect(round.takeTurn).to.be.a('function');
  });

  it('calculatePercentCorrect should be a function', function() {
    const round = new Round();
    expect(round.calculatePercentCorrect).to.be.a('function');
  });

  it('endRound should be a function', function() {
    const round = new Round();
    expect(round.endRound).to.be.a('function');
  });

});

// takeTurn: method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses
  // When a guess is made, a new Turn instance is created.
  // The turns count is updated, regardless of whether the guess is correct or incorrect
  // The next card becomes current card
  // Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
  // Feedback is returned regarding whether the guess is incorrect or correct
// calculatePercentCorrect: method that calculates and returns the percentage of correct guesses
// endRound: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’
