"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const MathResult_1 = require("./MathResult");
const reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
// const arrMatches = matches.split('\n');
const match1Date = reader.data[0][0];
// console.log(match1Date);
// const getMatchResult = (match: string[]): MatchResult => {
//   if (match[5] === 'H') {
//     return MatchResult.HomeWin;
//   } else if (match[5] === 'A') {
//     return MatchResult.AwayWin;
//   }
//   return MatchResult.Draw;
// };
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MathResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MathResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
// const countBits = function (number: number) {
//   let sum = 0;
//   // Обчислення суми цифр числа
//   while (number > 0) {
//     sum += number % 10;
//     number = Math.floor(number / 10);
//   }
//   // Перевірка, чи досягнуто однозначного числа
//   if (sum < 10) {
//     console.log(sum);
//     return sum;
//   }
//   console.log(sum);
//   return;
// };
// // countBits(16); //7
// countBits(456); //6
console.log(`Man United won ${manUnitedWins} times`);
