import { LevelStatus } from "../types/enums/LevelStatus";

export const getLevelStatus = (index: number, level: number): LevelStatus => {
  if (index === level) {
    return LevelStatus.ACTIVE;
  } else if (index < level) {
    return LevelStatus.PASSED;
  }
  return LevelStatus.INACTIVE;
};
