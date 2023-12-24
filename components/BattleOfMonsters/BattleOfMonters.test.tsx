import fetchMock from "jest-fetch-mock";
import "@testing-library/jest-dom";
import { renderWithProviders as render } from "../../shared/test-utils";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import BattleOfMonsters from "./BattleOfMonsters";
import MockData from "../../shared/mockdata.json";

describe("BattleArena tests", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("should render the app with fetched data", async () => {
    fetchMock.mockResponse(JSON.stringify(MockData));

    render(<BattleOfMonsters />, {
      preloadedState: {
        monsters: {
          monsterList: [],
          selectedMonsterId: "",
          computerMonsterId: "",
          winnerName: "",
          isLoading: false
        }
      }
    });

    await waitFor(() => {
      expect(fetchMock.mock.calls.length).toEqual(1);
      const radioMonsters = screen.getAllByRole("radio");
      expect(radioMonsters).toHaveLength(MockData.length);
    });
  });
});
