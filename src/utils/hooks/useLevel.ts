import { LevelContext } from "@/utils/providers/LevelContextProvider/LevelContextProvider";
import { useContext } from "react";

export default function useLevel() {
  return useContext(LevelContext);
}
