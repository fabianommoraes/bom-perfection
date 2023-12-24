import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { MonsterData } from "@/shared/types";

export interface BattleOfMonstersState {
  monsterList: MonsterData[];
  selectedMonsterId: string;
  computerMonsterId: string;
  winnerName: string;
  isLoading: boolean;
}

const initialState: BattleOfMonstersState = {
  monsterList: [],
  selectedMonsterId: "",
  computerMonsterId: "",
  winnerName: "",
  isLoading: false
};

export const monsterSliceReducers = {
  setDataFromFetch(
    state: { monsterList: MonsterData[] },
    action: { payload: any }
  ) {
    state.monsterList = action.payload;
  },
  setSelectedMonsterId(
    state: { selectedMonsterId: string },
    action: { payload: any }
  ) {
    state.selectedMonsterId = action.payload;
  },
  setComputerMonsterId(
    state: { computerMonsterId: string },
    action: { payload: any }
  ) {
    state.computerMonsterId = action.payload;
  },
  setWinnerName(state: { winnerName: string }, action: { payload: any }) {
    state.winnerName = action.payload;
  },
  setIsLoading(state: { isLoading: boolean }, action: { payload: any }) {
    state.isLoading = action.payload;
  }
};

export const monsterSlice = createSlice({
  name: "monsters",
  initialState,
  reducers: monsterSliceReducers
});

export const {
  setDataFromFetch,
  setSelectedMonsterId,
  setComputerMonsterId,
  setWinnerName,
  setIsLoading
} = monsterSlice.actions;

export const getMonsterList = (state: AppState) => state.monsters.monsterList;
export const getSelectedMonsterId = (state: AppState) =>
  state.monsters.selectedMonsterId;
export const getComputerMonsterId = (state: AppState) =>
  state.monsters.computerMonsterId;
export const getWinnerName = (state: AppState) => state.monsters.winnerName;
export const getIsLoading = (state: AppState) => state.monsters.isLoading;

export default monsterSlice.reducer;
