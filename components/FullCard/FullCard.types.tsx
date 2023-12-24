import { MonsterData } from "@/shared/types";

export type FullCardProps = {
  name?: "Player" | "Computer";
  monsterId?: string;
  monsterList: MonsterData[];
};

export type StyledCardProps = {
  selected: boolean;
};
