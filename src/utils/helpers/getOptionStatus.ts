import { OptionStatus } from "../types/enums/OptionStatus";

export const getOptionStatus = (
  letter: string,
  trials: string[],
  answers: string[]
): OptionStatus => {
  if (trials.includes(letter) && trials.length < answers.length) {
    return OptionStatus.SELECTED;
  } else if (trials.includes(letter) && answers.includes(letter)) {
    return OptionStatus.CORRECT;
  } else if (trials.includes(letter)) {
    return OptionStatus.WRONG;
  }
  return OptionStatus.INACTIVE;
};
