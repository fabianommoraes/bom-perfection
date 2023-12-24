import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import SelectedMonster from "./SelectedMonster";
import MockData from "../../shared/mockdata.json";

describe("SelectedMonster tests", () => {
  it("should render Dead Unicorn monster card with all data", () => {
    render(<SelectedMonster selectedMonster={MockData[0]} />);
    const name = screen.getByText(/Dead Unicorn/i);
    expect(name).toBeInTheDocument();
  });
});
