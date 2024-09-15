import HandLayout from "@/components/layouts/HandLayout/HandLayout";
import style from "./GameOverPage.module.scss";
import NavigationButton from "@/components/molecules/NavigationButton/NavigationButton";
import { useEffect } from "react";
import useLevel from "@/utils/hooks/useLevel";

const GameOverPage = () => {
  const { currLevel, setCurrLevel } = useLevel();

  useEffect(() => {
    return () => setCurrLevel({ index: 0, prize: 0 });
  }, []);

  return (
    <HandLayout>
      <div>
        <h4 className={style.subtitile}>Total score:</h4>
        <h1 className="title">${currLevel.prize} earned</h1>
      </div>
      <NavigationButton route="/game">Try Again</NavigationButton>
    </HandLayout>
  );
};

export default GameOverPage;
