import React from "react";
import MockData from "../../shared/mockdata.json";
import MonsterCard from "./MonsterCard";
import { ChangeEvent } from "react";

const story = {
  title: "Components/MonsterCard",
  component: MonsterCard,
  parameters: {
    layout: "centered",
    fetchMock: {
      mocks: []
    }
  }
};

export default story;

const onChange = (event: ChangeEvent<HTMLInputElement>) => {};

export const DeadUnicorn = () => (
  <MonsterCard
    id={MockData[0].id}
    name="monsterList"
    value={MockData[0].id}
    labelText={MockData[0].name}
    checked={false}
    imageUrl={MockData[0].imageUrl}
    onChange={onChange}
  />
);

export const OldShark = () => (
  <MonsterCard
    id={MockData[1].id}
    name="monsterList"
    value={MockData[1].id}
    labelText={MockData[1].name}
    checked={false}
    imageUrl={MockData[1].imageUrl}
    onChange={onChange}
  />
);

export const RedDragon = () => (
  <MonsterCard
    id={MockData[2].id}
    name="monsterList"
    value={MockData[2].id}
    labelText={MockData[2].name}
    checked={false}
    imageUrl={MockData[2].imageUrl}
    onChange={onChange}
  />
);

export const RobotBear = () => (
  <MonsterCard
    id={MockData[3].id}
    name="monsterList"
    value={MockData[3].id}
    labelText={MockData[3].name}
    checked={false}
    imageUrl={MockData[3].imageUrl}
    onChange={onChange}
  />
);

export const AngrySnake = () => (
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
