"use client";
import style from "./GamePage.module.scss";
import LevelMenu from "@/components/organisms/LevelMenu/LevelMenu";
import { IQuestion } from "@/utils/types/IQuestion";
import Game from "@/components/organisms/Game/Game";
import useLevel from "@/utils/hooks/useLevel";
import Burger from "@/components/atoms/Burger/Burger";
import { useEffect, useState } from "react";

interface GamePageProps {
  questions: IQuestion[];
}
const GamePage = ({ questions }: GamePageProps) => {
  const { currLevel, setCurrLevel } = useLevel();
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    setCurrLevel({ index: 0, prize: 0 });
  }, []);

  return (
    <div className={style.wrapper}>
      <Burger active={active} setActive={setActive} />
      <Game
        question={questions[currLevel.index]}
        maxLevel={questions.length - 1}
      />
      <LevelMenu
        levels={questions.map((question) => question.prize)}
        currLevel={currLevel.index}
        active={active}
      />
    </div>
  );
};

export default GamePage;
