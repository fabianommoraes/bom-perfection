import {
  Title,
  StyledBox,
  Container,
  SelectMessage
} from "./ListOfMonsters.styles";
import MonsterCard from "../MonsterCard/MonsterCard";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedMonsterId,
  getMonsterList,
  getSelectedMonsterId,
  setComputerMonsterId,
  setIsLoading,
  setWinnerName
} from "../../redux/monstersSlice";
import { MonsterData } from "@/shared/types";

const ListOfMonsters = () => {
  const monsterList: MonsterData[] = useSelector(getMonsterList);
  const selectedMonster = useSelector(getSelectedMonsterId);

  const dispatch = useDispatch();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelectedMonsterId(event.target.value));

    dispatch(setIsLoading(true));
    dispatch(setWinnerName(""));

    const monsterId = event.target.value;
    const filteredMonsterList = monsterList.filter(
      (monster) => monster.id !== monsterId
    );
    const randomNumber = Math.random();
    const result = randomNumber * filteredMonsterList.length;
    const resultFloor = Math.floor(result);
    const randomMonsterId = filteredMonsterList[resultFloor].id;

    setTimeout(() => {
      dispatch(setComputerMonsterId(randomMonsterId));
      dispatch(setIsLoading(false));
    }, 1000);
  };

  const isEmpty = monsterList.length === 0;

  return (
    <Container>
      <Title>Battle of Monsters</Title>

      <SelectMessage>
        {isEmpty ? "Loading..." : "Select your monster"}
      </SelectMessage>

      <StyledBox>
        {monsterList.map(({ id, name, imageUrl }) => (
          <MonsterCard
            key={id}
            id={id}
            name="monsterList"
            value={id}
            labelText={name}
            checked={selectedMonster === id}
            imageUrl={imageUrl}
            onChange={onChange}
          />
        ))}
      </StyledBox>
    </Container>
  );
};

export default ListOfMonsters;
