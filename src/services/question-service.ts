import { IQuestion } from "@/utils/types/IQuestion";

export default class QuestionService {
  static getQuestions = async (): Promise<IQuestion[]> => {
    try {
      const data = await import("@/assets/config/config.json", {
        assert: { type: "json" },
      });
      return data.questions as IQuestion[];
    } catch (error) {
      console.error("Error loading questions:", error);
      throw error;
    }
  };
}
