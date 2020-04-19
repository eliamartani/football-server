import corsMiddleware from '../middlewares/cors';

const Api = async (req, res) => {
  await corsMiddleware(req, res);

  const response = {
    message: 'Did you said API?',
  };

  res.status(200).json(response);
};

export default Api;
