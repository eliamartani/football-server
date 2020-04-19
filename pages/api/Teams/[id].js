import corsMiddleware from '../../../middlewares/cors';
import mock from '../../../mock/teams.json';
import mockWeeks from '../../../mock/weeks.json';

const Teams = async (req, res) => {
  await corsMiddleware(req, res);

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

  response.results = filterGamesByTeam(response.name);

  res.status(200).json(response);
};

const filterGamesByTeam = name => {
  return mockWeeks.reduce((gamesPlayed, week) => {
    const games = week.filter(game => game.teams.includes(name));

    if (games.length) {
      gamesPlayed.push(...games);
    }

    return gamesPlayed;
  }, []);
};

export default Teams;
