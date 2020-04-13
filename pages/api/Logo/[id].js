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

  // TODO should return image stream instead
  res.status(200).send(response.logo);
};

export default Logo;
