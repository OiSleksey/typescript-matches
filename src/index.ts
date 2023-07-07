import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MathResult';

const reader = new CsvFileReader('football.csv');

reader.read();
// const arrMatches = matches.split('\n');

const match1Date = reader.data[0][0];
console.log(match1Date);

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
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

// console.log(`Man United won ${manUnitedWins} times`);
