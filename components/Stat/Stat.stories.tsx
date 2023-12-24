import React from "react";

import Stat from "./Stat";

const story = {
  title: "Components/Stat",
  component: Stat,
  parameters: {
    layout: "centered",
    fetchMock: {
      mocks: []
    }
  }
};

export default story;

export const HP = () => <Stat name="HP" value={80} />;

export const Attack = () => <Stat name="Attack" value={60} />;

export const Defense = () => <Stat name="Defense" value={40} />;

export const Speed = () => <Stat name="Speed" value={20} />;
