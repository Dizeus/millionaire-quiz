'use client'
import HandLayout from "@/components/layouts/HandLayout/HandLayout";
import style from "./GameOverPage.module.scss";
import NavigationButton from "@/components/molecules/NavigationButton/NavigationButton";
import useLevel from "@/utils/hooks/useLevel";
import { getNumberWithCommas } from "@/utils/helpers/getNumberWithCommas";

const GameOverPage = () => {
  const { currLevel } = useLevel();

  return (
    <HandLayout>
      <div>
        <h4 className={style.subtitile}>Total score:</h4>
        <h1 className="title">${getNumberWithCommas(currLevel.prize)} earned</h1>
      </div>
      <NavigationButton route="/game">Try Again</NavigationButton>
    </HandLayout>
  );
};

export default GameOverPage;
