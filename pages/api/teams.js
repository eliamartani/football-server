import mock from '../../mock/teams.json';

const Teams = (req, res) => {
  const names = mock.map(item => item.name).sort();
  const response = [...new Set(names)];

  res.status(200).json(response);
};

export default Teams;
