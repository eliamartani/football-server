import corsMiddleware from '../../../middlewares/cors';
import mock from '../../../mock/weeks.json';

const Weeks = async (req, res) => {
  await corsMiddleware(req, res);

  const {
    query: { idx },
  } = req;
  const index = idx || 0;

  if (isNaN(index) || index > mock.length - 1) {
    res.status(200).json({
      error: `Week index out of range: Only between 0 ~ ${
        mock.length - 1
      } is allowed`,
    });

    return;
  }

  const response = mock[index];

  res.status(200).json(response);
};

export default Weeks;
