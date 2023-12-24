import React from "react";
import MockData from "../../shared/mockdata.json";
import FullCard from "./FullCard";
import withRedux from "../../shared/withRedux";
import { withData, emptyMock } from "../../shared/mock";

const story = {
  title: "Components/FullCard",
  component: FullCard,
  parameters: {
    layout: "centered",
    fetchMock: {
      mocks: []
    }
  }
};

export default story;

export const PlaceholderPlayer = () => (
  <FullCard name="Player" monsterList={MockData} />
);
PlaceholderPlayer.decorators = [withRedux(emptyMock)];

export const PlaceholderComputer = () => (
  <FullCard name="Computer" monsterList={MockData} />
);
PlaceholderComputer.decorators = [withRedux(emptyMock)];

export const Monster = () => (
  <FullCard monsterId={MockData[3].id} monsterList={MockData} />
);
Monster.decorators = [withRedux(withData)];
