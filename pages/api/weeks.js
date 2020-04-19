import corsMiddleware from '../../middlewares/cors';
import mock from '../../mock/weeks.json';

const Weeks = async (req, res) => {
  await corsMiddleware(req, res);

  res.status(200).json(mock);
};

export default Weeks;
