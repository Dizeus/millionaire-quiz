import style from "./Option.module.scss";
import { IOption } from "@/utils/types/IOption";

interface OptionProps {
  option: IOption;
  status: string | null;
  handleClickOption: (l: string) => void;
}

const Option = ({ option, status, handleClickOption }: OptionProps) => {
  return (
    <div
      onClick={()=>handleClickOption(option.letter)}
      className={`${style.container} ${style[`container_${status}`]}`}
    >
      <div className={style.border}>
        <div className={style.content}>
          <span className={style.letter}>{option.letter.toUpperCase()}</span>
          <span className={style.text}>{option.text}</span>
        </div>
      </div>
    </div>
  );
};

export default Option;
