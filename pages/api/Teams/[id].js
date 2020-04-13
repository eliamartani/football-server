import mock from '../../../mock/teams.json';

const Teams = (req, res) => {
  const {
    query: { id },
  } = req;
  const response = mock.find(item => item.id === id);

  if (!response) {
    res.status(200).json({
      error: `No team '${id}' found`,
    });

    return;
  }

  res.status(200).json(response);
};

export default Teams;
