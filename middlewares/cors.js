import Cors from 'cors';

const cors = Cors({
  methods: ['GET'],
});

const corsMiddleware = (req, res) =>
  new Promise((resolve, reject) => {
    cors(req, res, result => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });

export default corsMiddleware;
