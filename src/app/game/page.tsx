import GameLayout from "@/components/layouts/GameLayout/GameLayout";
import { IQuestion } from "@/utils/types/IQuestion";



const GamePage = async () => {
  const { questions } = await import("@/assets/config/config.json", {
    assert: {
      type: "json",
    },
  });

  return (
    <GameLayout questions={questions as IQuestion[]}/>
  );
};

export default GamePage;
