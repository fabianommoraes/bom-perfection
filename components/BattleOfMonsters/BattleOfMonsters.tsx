import Container from "@mui/material/Container";
import ListOfMonsters from "../ListOfMonsters/ListOfMonsters";
import BattleArena from "../BattleArena/BattleArena";
import Loading from "../Loading/Loading";
import { setDataFromFetch, setIsLoading } from "../../redux/monstersSlice";
import { useDispatch } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { requestMonstersData } from "../../services/monster";
import { StyledBox } from "./BattleOfMonsters.styles";
import { Alert } from "@mui/material";

const BattleOfMonsters = () => {
  const dispatch = useDispatch();

  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    dispatch(setIsLoading(true));
    setTimeout(async () => {
      try {
        const data = await requestMonstersData();
        dispatch(setDataFromFetch(data));
      } catch (error) {
        setError(true);
      }

      dispatch(setIsLoading(false));
    }, 1000);
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <Container>
        <StyledBox>
          {error ? (
            <Alert severity="error">
              Error! Reload the page and try again.
            </Alert>
          ) : (
            <>
              <ListOfMonsters />
              <BattleArena />{" "}
            </>
          )}
        </StyledBox>
      </Container>

      <Loading />
    </>
  );
};

export default BattleOfMonsters;
