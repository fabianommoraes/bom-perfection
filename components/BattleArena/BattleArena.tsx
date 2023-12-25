import { StyledBox, StyledButton } from "./BattleArena.styles";
import FullCard from "../FullCard/FullCard";
import VictoryMessage from "../VictoryMessage/VictoryMessage";
import { Alert, Box } from "@mui/material";
import { useSelector } from "react-redux";
import {
  getComputerMonsterId,
  getSelectedMonsterId,
  setWinnerName,
  getWinnerName,
  setIsLoading,
  getMonsterList,
  getWinnerError,
  setWinnerError
} from "../../redux/monstersSlice";
import { useDispatch } from "react-redux";
import { battle } from "../../services/monster";
import { MonsterData } from "@/shared/types";

const BattleArena = () => {
  const selectedMonsterId = useSelector(getSelectedMonsterId);
  const computerMonsterId = useSelector(getComputerMonsterId);
  const monsterList: MonsterData[] = useSelector(getMonsterList);
  const winnerName = useSelector(getWinnerName);
  const winnerError = useSelector(getWinnerError);

  const dispatch = useDispatch();

  const onClickStartBattle = async () => {
    dispatch(setIsLoading(true));
    dispatch(setWinnerName(""));

    setTimeout(async () => {
      const { status, data } = await battle(
        selectedMonsterId,
        computerMonsterId
      );

      if (status === 200) {
        dispatch(setWinnerName(data.winner.name));
      } else {
        dispatch(setWinnerError(true));
      }

      dispatch(setIsLoading(false));
    }, 1000);
  };

  return (
    <Box>
      {winnerError ? (
        <Alert
          severity="error"
          sx={{
            marginBottom: "35px"
          }}
        >
          Error during the battle. Please try again later.
        </Alert>
      ) : (
        winnerName && <VictoryMessage winner={winnerName} />
      )}
      <StyledBox>
        <FullCard
          name="Player"
          monsterId={selectedMonsterId}
          monsterList={monsterList}
        />
        <StyledButton
          disabled={!computerMonsterId}
          onClick={onClickStartBattle}
          variant="contained"
        >
          Start Battle
        </StyledButton>
        <FullCard
          name="Computer"
          monsterId={computerMonsterId}
          monsterList={monsterList}
        />
      </StyledBox>
    </Box>
  );
};

export default BattleArena;
