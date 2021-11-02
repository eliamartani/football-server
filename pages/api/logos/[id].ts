import type { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';
import path from 'path';

import corsMiddleware from '../../../middlewares/cors';
import mock from '../../../mock/teams.json';

async function Logo(req: NextApiRequest, res: NextApiResponse) {
  await corsMiddleware(req, res);

  const {
    query: { id },
  } = req;
  const response = mock.find(item => item.id === id);

  if (!response) {
    res.status(200).json({
      error: `No logo found`,
    });

    return;
  }

  try {
    const fileName = path.join(
      process.cwd(),
      'public',
      'images',
      `${response.id}.png`
    );
    const fileContent = await fs.readFile(fileName);

    res.setHeader('Content-Type', 'image/png;charset=utf-8');
    res.status(200).send(fileContent);
  } catch (err) {
    res.status(500).json({ error: err });
  }
}

export default Logo;
