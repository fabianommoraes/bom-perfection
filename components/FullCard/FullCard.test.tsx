import fetchMock from "jest-fetch-mock";
import "@testing-library/jest-dom";
import { renderWithProviders as render } from "../../shared/test-utils";
import { screen, waitFor } from "@testing-library/react";
import React from "react";
import FullCard from "./FullCard";
import MockData from "../../shared/mockdata.json";

describe("FullCard tests", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("should render the default player placeholder", () => {
    render(<FullCard name="Player" monsterList={MockData} />);

    const player = screen.getByText(/Player/i);
    expect(player).toBeInTheDocument();
  });

  it("should render the default computer placeholder", () => {
    render(<FullCard name="Computer" monsterList={MockData} />);

    const computer = screen.getByText(/Computer/i);
    expect(computer).toBeInTheDocument();
  });

  it("should render the a monster name and image", async () => {
    render(
      <FullCard
        name="Computer"
        monsterList={MockData}
        monsterId={MockData[0].id}
      />
    );

    const monsterName = screen.getByText(/Dead Unicorn/i);
    expect(monsterName).toBeInTheDocument();

    const encodedUrl = encodeURIComponent(MockData[0].imageUrl);

    await waitFor(() => {
      const image = screen.getByAltText("Dead Unicorn");
      expect(image).toHaveAttribute(
        "src",
        `/_next/image?url=${encodedUrl}&w=640&q=75`
      );
    });
  });
});
