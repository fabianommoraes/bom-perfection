import Container from "@mui/material/Container";
import ListOfMonsters from "../ListOfMonsters/ListOfMonsters";
import BattleArena from "../BattleArena/BattleArena";
import Loading from "../Loading/Loading";
import {
  getFetchError,
  setDataFromFetch,
  setFetchError,
  setIsLoading
} from "../../redux/monstersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { requestMonstersData } from "../../services/monster";
import { StyledBox } from "./BattleOfMonsters.styles";
import { Alert } from "@mui/material";

const BattleOfMonsters = () => {
  const dispatch = useDispatch();
  const fetchError = useSelector(getFetchError);

  const fetchData = useCallback(async () => {
    dispatch(setIsLoading(true));
    setTimeout(async () => {
      const { status, data } = await requestMonstersData();

      if (status === 200) {
        dispatch(setDataFromFetch(data));
      } else {
        dispatch(setFetchError(true));
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
          {fetchError ? (
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
