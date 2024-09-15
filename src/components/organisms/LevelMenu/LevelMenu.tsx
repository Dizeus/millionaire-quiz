import Level from "@/components/molecules/Level/Level";
import style from "./LevelMenu.module.scss";
import { getLevelStatus } from "@/utils/helpers/getLevelStatus";

interface LevelMenuProps {
  levels: number[];
  currLevel: number;
  active: boolean;
}

const LevelMenu = ({ levels, currLevel, active }: LevelMenuProps) => {
  return (
    <aside className={`${style.menu} ${active ? style.menu_active : ""}`}>
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
