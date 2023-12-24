import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Stat from "./Stat";

describe("Stat tests", () => {
  it("should render the attribute name and stat bar", () => {
    render(<Stat name="HP" value={80} />);

    const bar = screen.getByRole("progressbar");
    expect(bar).toBeInTheDocument();
    expect(bar).toHaveAttribute("aria-valuenow", "80");
  });
});
