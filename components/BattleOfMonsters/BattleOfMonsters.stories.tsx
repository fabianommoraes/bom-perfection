import React from "react";
import BattleOfMonsters from "./BattleOfMonsters";
import withRedux from "../../shared/withRedux";
import { emptyMock } from "../../shared/mock";
import { hostname, battleUrl, monstersUrl } from "../../services/monster";
import MockData from "../../shared/mockdata.json";
import MockBattle from "../../shared/mockbattle.json";

const story = {
  title: "App/BattleOfMonsters",
  component: BattleOfMonsters,
  parameters: {
    layout: "centered"
  }
};

export default story;

export const Default = () => <BattleOfMonsters />;
Default.decorators = [withRedux(emptyMock)];
Default.parameters = {
  fetchMock: {
    mocks: [
      {
        matcher: {
          name: "fetchMonsterData",
          url: `${hostname}${monstersUrl}`
        },
        response: {
          status: 200,
          body: MockData
        }
      },
      {
        matcher: {
          name: "battle",
          url: `${hostname}${battleUrl}`
        },
        response: {
          status: 200,
          body: MockBattle
        }
      }
    ]
  }
};

export const GetError = () => <BattleOfMonsters />;
GetError.decorators = [withRedux(emptyMock)];
GetError.parameters = {
  fetchMock: {
    mocks: [
      {
        matcher: {
          name: "fetchMonsterData",
          url: `${hostname}${monstersUrl}`
        },
        response: {
          status: 400,
          body: {}
        }
      }
    ]
  }
};

export const PostError = () => <BattleOfMonsters />;
PostError.decorators = [withRedux(emptyMock)];
PostError.parameters = {
  fetchMock: {
    mocks: [
      {
        matcher: {
          name: "fetchMonsterData",
          url: `${hostname}${monstersUrl}`
        },
        response: {
          status: 200,
          body: MockData
        }
      },
      {
        matcher: {
          name: "battle",
          url: `${hostname}${battleUrl}`
        },
        response: {
          status: 400,
          body: {}
        }
      }
    ]
  }
};
