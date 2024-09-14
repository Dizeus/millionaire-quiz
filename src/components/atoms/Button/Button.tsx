'use client'
import { useRouter } from "next/navigation";
import style from "./Button.module.scss";

interface ButtonProps {
  text: string;
}
const Button = ({ text }: ButtonProps) => {
  const router = useRouter();

  const handleOnClick = () => router.push("/game");

  return (
    <button onClick={handleOnClick} className={style.button}>
      {text}
    </button>
  );
};

export default Button;
