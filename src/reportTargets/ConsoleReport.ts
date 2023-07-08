import { OutputTarget } from '../Summary';

export class ConsoleRepot implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
