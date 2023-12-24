import { Box } from "@mui/material";
import {
  MonsterImage,
  MonsterName,
  StyledDivider
} from "./SelectedMonster.styles";
import Stat from "../Stat/Stat";
import { SelectedMonsterProps } from "./SelectedMonster.types";

const SelectedMonster = ({ selectedMonster }: SelectedMonsterProps) => {
  return (
    <Box>
      <MonsterImage src={selectedMonster.imageUrl} alt={selectedMonster.name} />
      <MonsterName data-testid={"cypress-selected-computer"}>
        {selectedMonster.name}
      </MonsterName>
      <StyledDivider />
      <Stat name="HP" value={selectedMonster.hp} />
      <Stat name="Attack" value={selectedMonster.attack} />
      <Stat name="Defense" value={selectedMonster.defense} />
      <Stat name="Speed" value={selectedMonster.speed} />
    </Box>
  );
};

export default SelectedMonster;
