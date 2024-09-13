import { getNumberWithCommas } from "@/utils/helpers/getNumberWithCommas";
import style from "./Level.module.scss";

interface LevelProps {
  value: number;
  status: string;
}

const Level = ({ value, status }: LevelProps) => {
  return (
    <div className={`${style.container} ${style[status]}`}>
      <div className={style.border}>
        <div className={style.content}>${getNumberWithCommas(value)}</div>
      </div>
    </div>
  );
};

export default Level;
