import { IAnswer } from "./IAnswer";
import { IOption } from "./IOption";

export interface IQuestion {
  question: string;
  options: IOption[];
  answer: IAnswer;
  prize: number;
}
