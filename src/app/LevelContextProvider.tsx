"use client";
import { ILevel } from "@/utils/types/ILevel";
import { createContext, ReactNode, useState } from "react";

type LevelContextType = {
  currLevel: {
    index: number;
    prize: number;
  };
  setCurrLevel: (l: { index: number; prize: number }) => void;
};

const LevelContextDefaultValue: LevelContextType = {
  currLevel: {
    index: 0,
    prize: 0,
  },
  setCurrLevel: () => {},
};

export const LevelContext = createContext<LevelContextType>(
  LevelContextDefaultValue
);

export default function LevelContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currLevel, setCurrLevel] = useState<ILevel>({ index: 0, prize: 0 });
  
  return (
    <LevelContext.Provider
      value={{
        currLevel,
        setCurrLevel,
      }}
    >
      {children}
    </LevelContext.Provider>
  );
}
