'use strict';

const sudokuGame = {
    score: 20
}

// Nullish: null and undefined (NOT 0 or '')

const scored = sudokuGame.score ?? 100;
console.log(scored);
