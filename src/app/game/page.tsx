import QuestionService from "../../services/question-service";
import GamePage from "@/components/pages/GamePage/GamePage";

const Game = async () => {
  const questions = await QuestionService.getQuestions();

  return <GamePage questions={questions} />;
};

export default Game;
