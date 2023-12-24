import { FullCardProps } from "./FullCard.types";
import PlaceholderCard from "../Placeholder/Placeholder";
import SelectedMonster from "../SelectedMonster/SelectedMonster";
import { StyledCard } from "./FullCard.styles";
import { MonsterData } from "@/shared/types";

const FullCard = ({ name, monsterId, monsterList }: FullCardProps) => {
  let content = null;

  const monsterData = monsterList.find(
    (monster: MonsterData) => monster.id === monsterId
  );

  if (monsterId && monsterData) {
    content = <SelectedMonster selectedMonster={monsterData} />;
  } else {
    content = <PlaceholderCard name={name} />;
  }

  return <StyledCard selected={Boolean(monsterId)}>{content}</StyledCard>;
};

export default FullCard;
