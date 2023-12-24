import React from "react";
import VictoryMessage from "./VictoryMessage";

const story = {
  title: "Components/VictoryMessage",
  component: VictoryMessage,
  parameters: {
    layout: "centered",
    fetchMock: {
      mocks: []
    }
  }
};

export default story;

export const Primary = () => <VictoryMessage winner={"Dead Unicorn"} />;
