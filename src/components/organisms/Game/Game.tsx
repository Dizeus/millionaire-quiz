import Question from "@/components/atoms/Question/Question";
import style from "./Game.module.scss";
import Options from "@/components/organisms/Options/Options";
import { IQuestion } from "@/utils/types/IQuestion";
import { useState } from "react";
import { compareAnswers } from "@/utils/helpers/compareAnswers";

interface GameProps {
  question: IQuestion;
  maxLevel: number;
}
const Game = ({ question, maxLevel }: GameProps) => {
  return (
    <div className={style.game}>
      <Question text={question.question} />
      <Options
        maxLevel={maxLevel}
        options={question.options}
        answer={question.answer}
        prize={question.prize}
      />
    </div>
  );
};

export default Game;
