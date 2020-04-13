import mock from '../../../mock/teams.json';
import * as fs from 'fs';
import { join } from 'path'

const Logo = async (req, res) => {
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

  const imagesDirectory = join(process.env.PROJECT_DIRNAME, 'public/images/')
  const buffer = fs.readFileSync(`${imagesDirectory}${id}.png`)
  res.setHeader('Content-Type', 'image/png;charset=utf-8');
  return res.status(200).send(buffer, 'binary');
};

export default Logo;
