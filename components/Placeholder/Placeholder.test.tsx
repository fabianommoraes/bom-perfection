import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import React from "react";
import Placeholder from "./Placeholder";
import { renderWithProviders as render } from "../../shared/test-utils";

describe("Placeholder tests", () => {
  it("should render Player text", () => {
    render(<Placeholder name="Player" />);

    const player = screen.getByText(/Player/i);
    expect(player).toBeInTheDocument();
  });

  it("should render Computer text", () => {
    render(<Placeholder name="Computer" />);

    const player = screen.getByText(/Computer/i);
    expect(player).toBeInTheDocument();
  });
});
