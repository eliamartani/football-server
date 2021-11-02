import type { NextApiRequest, NextApiResponse } from 'next';

import corsMiddleware from '../../../middlewares/cors';
import mock from '../../../mock/teams.json';

async function Teams(req: NextApiRequest, res: NextApiResponse) {
  await corsMiddleware(req, res);

  const names = mock.map(item => item.name).sort();
  const response = Array.from(new Set(names));

  res.status(200).json(response);
}

export default Teams;
