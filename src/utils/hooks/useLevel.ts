import { LevelContext } from "@/app/LevelContextProvider";
import { useContext } from "react";

export default function useLevel() {
  return useContext(LevelContext);
}
