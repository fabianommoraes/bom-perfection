import React from "react";
import BattleArena from "./BattleArena";
import withRedux from "../../shared/withRedux";
import { withData, emptyMock, onlyPlayerSelected } from "../../shared/mock";

const story = {
  title: "Components/BattleArena",
  component: BattleArena,
  parameters: {
    layout: "centered",
    fetchMock: {
      mocks: []
    }
  }
};

export default story;

export const Default = () => <BattleArena />;
Default.decorators = [withRedux(emptyMock)];

export const PlayerSelected = () => <BattleArena />;
PlayerSelected.decorators = [withRedux(onlyPlayerSelected)];

export const ComputerSelected = () => <BattleArena />;
ComputerSelected.decorators = [withRedux(withData)];
