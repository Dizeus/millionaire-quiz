import { IOption } from "@/utils/types/IOption";
import Option from "@/components/molecules/Option/Option";
import style from "./Options.module.scss";
import { compareAnswers } from "@/utils/helpers/compareAnswers";
import { IAnswer } from "@/utils/types/IAnswer";
import { useState } from "react";
import { getOptionStatus } from "@/utils/helpers/getOptionStatus";
import useLevel from "@/utils/hooks/useLevel";
import { useRouter } from "next/navigation";

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

  const handleClickOption = (letter: string) => {
    const updatedTrials = [...trials, letter];
    if (updatedTrials.length === answer.letters.length) {
      if (compareAnswers(answer, updatedTrials)) {
        setTrials([]);
        
        if(currLevel.index === maxLevel){
          router.push("/gameover");
        }
          
        setCurrLevel({ index: currLevel.index + 1, prize });
      } else {
        router.push("/gameover");
      }
    }
  };

  return (
    <div className={style.options}>
      {options.map((option: IOption) => (
        <Option
          key={option.letter}
          option={option}
          status={getOptionStatus(option.letter, trials, answer.letters)}
          handleClickOption={handleClickOption}
        />
      ))}
    </div>
  );
};

export default Options;
