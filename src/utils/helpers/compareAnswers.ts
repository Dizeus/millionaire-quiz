import { IAnswer } from "../types/IAnswer";
import { Operators } from "../types/enums/Operators";

export const compareAnswers = (answer: IAnswer, trials: string[]) => {
  if (answer.operator === Operators.ONLY) {
    return answer.letters[0] === trials[0];
  } else if (answer.operator === Operators.OR) {
    return trials.every((trial) => answer.letters.includes(trial));
  }
  return JSON.stringify(answer.letters.sort()) === JSON.stringify(trials.sort());
};
