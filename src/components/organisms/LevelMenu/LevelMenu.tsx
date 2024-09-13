import Level from "@/components/molecules/Level/Level";
import style from "./LevelMenu.module.scss";
import { getLevelStatus } from "@/utils/helpers/getLevelStatus";

interface LevelMenuProps {
  levels: number[];
  currLevel: number;
}

const LevelMenu = ({ levels, currLevel }: LevelMenuProps) => {

  return (
    <aside className={style.menu}>
      {levels.map((level, i) => (
        <Level
          status={getLevelStatus(i, currLevel)}
          key={level}
          value={level}
        />
      ))}
    </aside>
  );
};

export default LevelMenu;
