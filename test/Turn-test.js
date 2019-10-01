const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('Turn should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a guess and Card object', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn(card, 'object');
    expect(turn.card).to.equal(card);
    expect(turn.guess).to.equal('object');
  });

  it('returnGuess should be a function', function() {
    const turn = new Turn();
    expect(turn.returnGuess).to.be.a('function');
  });

  it('returnGuess should return guess string', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn(card, 'object');
    expect(turn.returnGuess()).to.equal('object');
  });

  it('returnCard should be a function', function() {
    const turn = new Turn();
    expect(turn.returnCard).to.be.a('function');
  });

  it('returnCard should return Card object', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn(card, 'object');
    expect(turn.returnCard()).to.equal(card);
  });

  it('evaluateGuess should be a function', function() {
    const turn = new Turn();
    expect(turn.evaluateGuess).to.be.a('function');
  });

  it('evaluateGuess should return boolean', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn(card, 'array');
    const turn2 = new Turn(card, 'object');
    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('giveFeedback should be a function', function() {
    const turn = new Turn();
    expect(turn.giveFeedback).to.be.a('function');
  });

  it('giveFeedback should return phrase', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn(card, 'array');
    const turn2 = new Turn(card, 'object');
    expect(turn1.giveFeedback()).to.equal('incorrect!');
    expect(turn2.giveFeedback()).to.equal('correct!');
  });

});

// giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not.
