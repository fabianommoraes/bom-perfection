import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import React from "react";
import MonsterCard from "./MonsterCard";
import MockData from "../../shared/mockdata.json";
import { renderWithProviders as render } from "../../shared/test-utils";

describe("MonsterCard tests", () => {
  it("should render AngrySnake monster card with all data", () => {
    const onChange = jest.fn();
    render(
      <MonsterCard
        id={MockData[4].id}
        name="monsterList"
        value={MockData[4].id}
        labelText={MockData[4].name}
        checked={false}
        imageUrl={MockData[4].imageUrl}
        onChange={onChange}
      />
    );
    const name = screen.getByText(/Angry Snake/i);
    expect(name).toBeInTheDocument();
  });
});
