export type MonsterData = {
  id: string;
  name: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
  type: string;
  imageUrl: string;
};

export type BattleArenaProps = {
  selectedMonster?: MonsterData;
  computerMonster?: MonsterData;
};
