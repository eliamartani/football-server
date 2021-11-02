import type { NextApiRequest, NextApiResponse } from 'next';

import corsMiddleware from '../../../middlewares/cors';

async function Logos(req: NextApiRequest, res: NextApiResponse) {
  await corsMiddleware(req, res);

  const response = {
    message: 'teamID is missing',
  };

  res.status(400).json(response);
}

export default Logos;
