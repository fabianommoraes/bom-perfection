export const hostname = "http://localhost:3000/api";
export const battleUrl = "/battle";
export const monstersUrl = "/monsters";

const headers = { "Content-type": "application/json; charset=UTF-8" };

export const battle = async (monster1Id: string, monster2Id: string) => {
  const body = {
    monster1Id,
    monster2Id
  };

  const response = await fetch(`${hostname}${battleUrl}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: headers
  });

  const data = await response.json();

  return {
    status: response.status,
    data
  };
};

export const requestMonstersData = async () => {
  const response = await fetch(`${hostname}${monstersUrl}`);
  const data = await response.json();
  return {
    status: response.status,
    data
  };
};
