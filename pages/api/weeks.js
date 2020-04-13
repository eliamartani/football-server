import mock from '../../mock/weeks.json';

const Weeks = (req, res) => {
  res.status(200).json(mock);
};

export default Weeks;
