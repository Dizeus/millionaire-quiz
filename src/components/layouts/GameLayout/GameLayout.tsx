"use client";
import style from "./GameLayout.module.scss";
import LevelMenu from "@/components/organisms/LevelMenu/LevelMenu";
import { IQuestion } from "@/utils/types/IQuestion";
import Game from "@/components/organisms/Game/Game";
import useLevel from "@/utils/hooks/useLevel";

interface GameLayoutProps {
  questions: IQuestion[];
}
const GameLayout = ({ questions }: GameLayoutProps) => {
  const { currLevel } = useLevel();
  const maxLevel = questions.length - 1;
  const currIndex = currLevel.index > maxLevel ? maxLevel : currLevel.index;
  return (
    <div className={style.layout}>
      <Game question={questions[currIndex]} maxLevel={maxLevel} />
      <LevelMenu
        levels={questions.map((question) => question.prize)}
        currLevel={maxLevel}
      />
    </div>
  );
};

export default GameLayout;
