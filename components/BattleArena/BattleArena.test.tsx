import fetchMock from "jest-fetch-mock";
import "@testing-library/jest-dom";
import { renderWithProviders as render } from "../../shared/test-utils";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import BattleArena from "./BattleArena";
import MockData from "../../shared/mockdata.json";

describe("BattleArena tests", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("should render the default state", () => {
    render(<BattleArena />);

    const player = screen.getByText(/Player/i);
    const computer = screen.getByText(/Computer/i);
    const button = screen.getByRole("button", { name: /Start Battle/i });

    expect(player).toBeInTheDocument();
    expect(computer).toBeInTheDocument();
    expect(button).toHaveAttribute("disabled");
  });

  it("should render the selected player and computer state", () => {
    render(<BattleArena />, {
      preloadedState: {
        monsters: {
          monsterList: MockData,
          selectedMonsterId: MockData[0].id,
          computerMonsterId: MockData[1].id,
          winnerName: "",
          isLoading: false
        }
      }
    });

    const player = screen.getByText(/Dead Unicorn/i);
    expect(player).toBeInTheDocument();

    const computer = screen.getByText(/Old Shark/i);
    expect(computer).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /Start Battle/i });
    expect(button).not.toHaveAttribute("disabled");
  });

  it("should render the winner", async () => {
    fetchMock.mockResponse(JSON.stringify({ winner: { name: "Old Shark" } }));
    render(<BattleArena />, {
      preloadedState: {
        monsters: {
          monsterList: MockData,
          selectedMonsterId: MockData[0].id,
          computerMonsterId: MockData[1].id,
          winnerName: "",
          isLoading: false
        }
      }
    });

    const button = screen.getByRole("button", { name: /Start Battle/i });
    expect(button).not.toHaveAttribute("disabled");

    fireEvent.click(button);

    await waitFor(() => {
      expect(fetchMock.mock.calls.length).toEqual(1);
      const winner = screen.getByText(/Old Shark wins!/i);
      expect(winner).toBeInTheDocument();
    });
  });
});
