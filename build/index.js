"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const MathResult_1 = require("./MathResult");
const CsvFileReader_1 = require("./CsvFileReader");
//Create an object that implements the DataReader interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
//Create an object of MatchReader and pass DataReader implementation
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
let manUnitedWins = 0;
for (let match of matchReader.matches) {
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
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const result = Object.assign(target, source);
console.log(target === result); // { a: 1, b: 4, c: 5 }
console.log(result); // { a: 1, b: 4, c: 5 }
