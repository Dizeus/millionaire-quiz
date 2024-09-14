import { IOption } from "@/utils/types/IOption";
import Option from "@/components/molecules/Option/Option";
import style from "./Options.module.scss";
import { compareAnswers } from "@/utils/helpers/compareAnswers";
import { IAnswer } from "@/utils/types/IAnswer";
import { useState } from "react";
import { getOptionStatus } from "@/utils/helpers/getOptionStatus";
import useLevel from "@/utils/hooks/useLevel";
import { useRouter } from "next/navigation";
import { Operators } from "@/utils/types/enums/Operators";
import { AFTER_ANSWER_DELAY } from "@/assets/config/delay";

interface OptionsProps {
  options: IOption[];
  answer: IAnswer;
  prize: number;
  maxLevel: number;
}

const Options = ({ options, answer, prize, maxLevel }: OptionsProps) => {
  const [trials, setTrials] = useState<string[]>([]);
  const router = useRouter();
  const { currLevel, setCurrLevel } = useLevel();
  const isCheck =
    trials.length === answer.letters.length || answer.operator === Operators.OR;

  const handleAnswer = (newTrials: string[]): void => {
    if (compareAnswers(answer, newTrials)) {
      const newIndex =
        currLevel.index === maxLevel ? currLevel.index : currLevel.index + 1;
      setCurrLevel({ index: newIndex, prize });
    }
    if (!compareAnswers(answer, newTrials) || currLevel.index === maxLevel) {
      router.push("/gameover");
    }
    setTrials([]);
  };

  const handleClickOption = (letter: string) => {
    const newTrials = [...trials, letter];
    setTrials(newTrials);
    newTrials.length === answer.letters.length &&
      setTimeout(() => handleAnswer(newTrials), AFTER_ANSWER_DELAY);
  };

  return (
    <div className={style.options}>
      {options.map((option: IOption) => (
        <Option
          key={option.letter}
          option={option}
          status={getOptionStatus(option.letter, trials, answer)}
          handleClickOption={handleClickOption}
          isCheck={isCheck}
        />
      ))}
    </div>
  );
};

export default Options;
