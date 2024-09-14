"use client";
import style from "./GameLayout.module.scss";
import LevelMenu from "@/components/organisms/LevelMenu/LevelMenu";
import { IQuestion } from "@/utils/types/IQuestion";
import Game from "@/components/organisms/Game/Game";
import useLevel from "@/utils/hooks/useLevel";
import Burger from "@/components/atoms/Burger/Burger";
import { useState } from "react";

interface GameLayoutProps {
  questions: IQuestion[];
}
const GameLayout = ({ questions }: GameLayoutProps) => {
  const { currLevel } = useLevel();
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className={style.layout}>
      <Burger active={active} setActive={setActive} />
      <Game question={questions[currLevel.index]} maxLevel={questions.length - 1} />
      <LevelMenu
        levels={questions.map((question) => question.prize)}
        currLevel={currLevel.index}
        active={active}
      />
    </div>
  );
};

export default GameLayout;
