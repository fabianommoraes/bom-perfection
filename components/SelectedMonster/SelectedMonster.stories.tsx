import React from "react";
import MockData from "../../shared/mockdata.json";
import SelectedMonster from "./SelectedMonster";

const story = {
  title: "Components/SelectedMonster",
  component: SelectedMonster,
  parameters: {
    layout: "centered",
    fetchMock: {
      mocks: []
    }
  }
};

export default story;

export const Default = () => <SelectedMonster selectedMonster={MockData[0]} />;
