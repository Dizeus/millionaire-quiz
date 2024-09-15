import { OptionStatus } from "@/utils/types/enums/OptionStatus";
import style from "./Option.module.scss";
import { IOption } from "@/utils/types/IOption";

interface OptionProps {
  option: IOption;
  status: OptionStatus;
  isCheck: boolean;
  handleClickOption: (l: string) => void;
}

const Option = ({
  option,
  status,
  handleClickOption,
  isCheck,
}: OptionProps) => {
  return (
    <button
      disabled={isCheck}
      onClick={() => handleClickOption(option.letter)}
      className={`${style.container} ${style[status]}`}
    >
      <div className={style.border}>
        <div className={style.content}>
          <span className={style.letter}>{option.letter.toUpperCase()}</span>
          <span className={style.text}>{option.text}</span>
        </div>
      </div>
    </button>
  );
};

export default Option;
