import React from "react";

import Placeholder from "./Placeholder";

const story = {
  title: "Components/Placeholder",
  component: Placeholder,
  parameters: {
    layout: "centered",
    fetchMock: {
      mocks: []
    }
  }
};

export default story;

export const Player = () => <Placeholder name="Player" />;

export const Computer = () => <Placeholder name="Computer" />;
