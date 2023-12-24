import "@testing-library/jest-dom";
import { renderWithProviders as render } from "../../shared/test-utils";
import { screen, fireEvent, waitFor, act } from "@testing-library/react";
import React from "react";
import ListOfMonsters from "./ListOfMonsters";
import MockData from "../../shared/mockdata.json";

describe("ListOfMonsters tests", () => {
  it("should render the list of monsters", () => {
    render(<ListOfMonsters />, {
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

    const radioMonsters = screen.getAllByRole("radio");
    expect(radioMonsters).toHaveLength(MockData.length);
  });

  it("should render the loaing/empty state", async () => {
    render(<ListOfMonsters />);

    const radioMonsters = screen.queryAllByRole("radio");
    const loading = screen.getByText(/Loading/i);

    expect(radioMonsters).toHaveLength(0);
    expect(loading).toBeInTheDocument();
  });

  it("should select one of the monsters in the list", async () => {
    jest.useFakeTimers();

    render(<ListOfMonsters />, {
      preloadedState: {
        monsters: {
          monsterList: MockData,
          selectedMonsterId: "",
          computerMonsterId: "",
          winnerName: "",
          isLoading: false
        }
      }
    });

    const monsters = screen.getAllByRole("radio");
    fireEvent.click(monsters[1]);

    act(() => {
      jest.runAllTimers();
    });

    await waitFor(() => {
      expect(monsters[0]).not.toBeChecked();
      expect(monsters[1]).toBeChecked();
    });

    jest.useRealTimers();
  });
});
