import React from "react";
import ListOfMonsters from "./ListOfMonsters";
import withRedux from "../../shared/withRedux";
import { withData, emptyMock } from "../../shared/mock";

const story = {
  title: "Components/ListOfMonsters",
  component: ListOfMonsters,
  parameters: {
    layout: "centered",
    fetchMock: {
      mocks: []
    }
  }
};

export default story;

export const WithData = () => <ListOfMonsters />;
WithData.decorators = [withRedux(withData)];

export const Empty = () => <ListOfMonsters />;
Empty.decorators = [withRedux(emptyMock)];
