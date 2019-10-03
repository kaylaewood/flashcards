const http = require('http');
let app = http.createServer();
const Game = require('../flashcards/src/Game');
const game = new Game();

app.listen(3000, '127.0.0.1');
game.start();
