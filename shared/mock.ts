import { createSlice } from "@reduxjs/toolkit";
import MockData from "./mockdata.json";
import { monsterSliceReducers } from "../redux/monstersSlice";

// export interface BattleOfMonstersState {
//   monsterList: MonsterData[];
//   selectedMonsterId: string;
//   computerMonsterId: string;
//   winnerName: string;
//   isLoading: boolean;
// }

// const reducers = {
//   setDataFromFetch(state: { monsterList: MonsterData[]; }, action: { payload: any; }) {
//     state.monsterList = action.payload;
//   },
//   setSelectedMonsterId(state: { selectedMonsterId: string; }, action: { payload: any; }) {
//    state.selectedMonsterId = action.payload;
//   },
//   setComputerMonsterId(state: { computerMonsterId: string; }, action: { payload: any; }) {
//     state.computerMonsterId = action.payload;
//   },
//   setWinnerName(state: { winnerName: string; }, action: { payload: any; }) {
//     state.winnerName = action.payload;
//   },
//   setIsLoading(state: { isLoading: boolean; }, action: { payload: any; }) {
//     state.isLoading = action.payload;
//   }
// };

// export const monsterSlice = createSlice({
//   name: "monsters",
//     initialState: {
//     monsterList: [],
//     selectedMonsterId: '',
//     computerMonsterId: '',
//     winnerName: '',
//     isLoading: false,
//   },
//   reducers: reducers,
// });

// export const {
//   setDataFromFetch,
//   setSelectedMonsterId,
//   setComputerMonsterId,
//   setWinnerName,
//   setIsLoading,
// } = monsterSlice.actions;

// export const getMonsterList = (state: AppState) => state.monsters.monsterList;
// export const getSelectedMonsterId = (state: AppState) =>
//   state.monsters.selectedMonsterId;
// export const getComputerMonsterId = (state: AppState) =>
//   state.monsters.computerMonsterId;
// export const getWinnerName = (state: AppState) =>
//   state.monsters.winnerName;
// export const getIsLoading = (state: AppState) =>
//   state.monsters.isLoading;

export const withData = createSlice({
  name: "monsters",
  initialState: {
    monsterList: MockData,
    selectedMonsterId: MockData[0].id,
    computerMonsterId: MockData[1].id,
    winnerName: "",
    isLoading: false
  },
  reducers: monsterSliceReducers
});

export const emptyMock = createSlice({
  name: "monsters",
  initialState: {
    monsterList: [],
    selectedMonsterId: "",
    computerMonsterId: "",
    winnerName: "",
    isLoading: false
  },
  reducers: monsterSliceReducers
});

export const onlyPlayerSelected = createSlice({
  name: "monsters",
  initialState: {
    monsterList: MockData,
    selectedMonsterId: MockData[0].id,
    computerMonsterId: "",
    winnerName: "",
    isLoading: false
  },
  reducers: monsterSliceReducers
});

export const loading = createSlice({
  name: "monsters",
  initialState: {
    monsterList: MockData,
    selectedMonsterId: MockData[0].id,
    computerMonsterId: MockData[1].id,
    winnerName: "",
    isLoading: true
  },
  reducers: monsterSliceReducers
});
