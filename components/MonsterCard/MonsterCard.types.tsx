import { ChangeEvent } from "react";

export type MonsterCardProps = {
  id: string;
  name: string;
  imageUrl: string;
  value: string;
  checked: boolean;
  labelText: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  selectedMonster?: string;
};

export type StyledCardProps = {
  checked: boolean;
};
