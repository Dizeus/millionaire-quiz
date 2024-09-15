import style from "./Button.module.scss";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  handleOnClick: ()=>void;
}
const Button = ({ children, handleOnClick }: ButtonProps) => {

  return (
    <button onClick={handleOnClick} className={style.button}>
      {children}
    </button>
  );
};

export default Button;
