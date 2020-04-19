import corsMiddleware from '../../middlewares/cors';

const Logos = async (req, res) => {
  await corsMiddleware(req, res);

  const response = {
    message: 'teamID is missing',
  };

  res.status(400).json(response);
};

export default Logos;
