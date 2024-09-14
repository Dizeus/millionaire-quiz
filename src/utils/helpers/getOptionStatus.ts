import { Operators } from "../types/enums/Operators";
import { OptionStatus } from "../types/enums/OptionStatus";
import { IAnswer } from "../types/IAnswer";

export const getOptionStatus = (
  letter: string,
  trials: string[],
  answer: IAnswer
): OptionStatus => {
  if (trials.includes(letter) && trials.length < answer.letters.length && answer.operator !== Operators.OR) {
    return OptionStatus.SELECTED;
  } else if (trials.includes(letter) && answer.letters.includes(letter)) {
    return OptionStatus.CORRECT;
  } else if (trials.includes(letter)) {
    return OptionStatus.WRONG;
  }
  return OptionStatus.INACTIVE;
};
