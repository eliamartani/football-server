import type { NextApiRequest, NextApiResponse } from 'next';

import corsMiddleware from '../../../middlewares/cors';
import mock from '../../../mock/weeks.json';

async function Weeks(req: NextApiRequest, res: NextApiResponse) {
  await corsMiddleware(req, res);

  res.status(200).json(mock);
}

export default Weeks;
