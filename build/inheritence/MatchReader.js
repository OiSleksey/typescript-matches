"use strict";
// import { CsvFileReader } from './CsvFileReader';
// import { dateStringToDate } from '../util';
// import { MatchResult } from '../MathResult';
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
class MatchReader extends CsvFileReader {
    mapRow(row) {
        return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6],
        ];
    }
}
exports.MatchReader = MatchReader;
