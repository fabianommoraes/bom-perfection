import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { monsterSlice } from "./monstersSlice";
import { createWrapper } from "next-redux-wrapper";

const rootReducer = combineReducers({
  [monsterSlice.name]: monsterSlice.reducer
});

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export const wrapper = createWrapper<AppStore>(makeStore);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore["dispatch"];
