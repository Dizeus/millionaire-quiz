import style from "./Question.module.scss";

interface QuestionProps {
  text: string;
}

const Question = ({ text }: QuestionProps) => {
  return <h3 className={style.question}>{text}</h3>;
};

export default Question;
