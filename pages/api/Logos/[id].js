import absoluteUrl from 'next-absolute-url';
import fetch from 'isomorphic-unfetch';
import mock from '../../../mock/teams.json';

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

  try {
    const { origin } = absoluteUrl(req, 'localhost:3000');
    const url = `${origin}/images/${id}.png`;
    const requestImage = await fetch(url);
    const arrayBuffer = await requestImage.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer, 'utf-8');

    res.setHeader('Content-Type', 'image/png;charset=utf-8');
    res.status(200).send(buffer);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export default Logo;
