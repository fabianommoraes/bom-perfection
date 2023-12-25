// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { promises as fs } from 'fs';

const data = await fs.readFile(process.cwd() + '/pages/api/monsters.json', 'utf8');
const jsondata = JSON.parse(data)

export default async function handler(req, res) {

  if (req.method === 'GET') {
    try {
      res.status(200).json(jsondata)
    }
    catch (error) {
      console.log(error)
    }
  }
  
}
