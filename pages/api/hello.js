// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { promises as fs } from 'fs';





export default async function handler(
  req,
  res
) {
  

  if(req.method === 'POST') {

  const { monster1Id, monster2Id } = req.body;

  if (!monster1Id || !monster2Id) {
    return res.status(400).json({ message: 'Missing ID' });
  }

  const monster1 = data.monsters.find((monster) => monster.id === monster1Id);
  const monster2 = data.monsters.find((monster) => monster.id === monster2Id);

  if (!monster1 || !monster2) {
    return res.status(400).json({ message: 'Invalid ID' });
  }

  const monster1Sum =
    monster1.attack + monster1.defense + monster1.hp + monster1.speed;
  const monster2Sum =
    monster2.attack + monster2.defense + monster2.hp + monster2.speed;

  if (monster1Sum > monster2Sum) {
    return res.json({ winner: monster1, tie: false });
  }

  if (monster2Sum > monster1Sum) {
    return res.json({ winner: monster2, tie: false });
  }

  if (monster1Sum === monster2Sum) {
    return res.json({ winner: null, tie: true });
  }
  }

  if(req.method === 'GET') {
    try {
      const file_data = await fs.readFile(process.cwd() + '/pages/api/monsters.json', 'utf8');
      const json_data = JSON.parse(file_data)
      // Do stuff
      res.status(200).json(json_data)
    }
    catch (error) {
      console.log(error)
    }
  }
  
  


}
