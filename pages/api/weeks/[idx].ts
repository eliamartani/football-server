import type { NextApiRequest, NextApiResponse } from 'next';

import corsMiddleware from '../../../middlewares/cors';
import mock from '../../../mock/weeks.json';

async function Weeks(req: NextApiRequest, res: NextApiResponse) {
  await corsMiddleware(req, res);

  const {
    query: { idx },
  } = req;
  const index = Number(idx);

  if (isNaN(index) || index > mock.length - 1) {
    res.status(200).json({
      error: `Week index out of range: Only between 0 ~ ${
        mock.length - 1
      } is allowed`,
    });

    return;
  }

  res.status(200).json(mock[index]);
}

export default Weeks;
