import style from './Button.module.scss';

interface ButtonProps {
  text: string;
}
const Button = ({ text }: ButtonProps) => {
  return <button className={style.button}>{text}</button>;
};

export default Button;
