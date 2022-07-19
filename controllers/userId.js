const path = require('path');

const { getDataFromFile } = require('../helpers/files');

const dataPathFile = path.join(__dirname, '..', 'data', 'users.json');

const userId = (req, res) => getDataFromFile(dataPathFile)
  .then((users) => users.find((user) => user._id === req.params.id))
  .then((user) => {
    if (!user) {
      res.status(404).send(`user ${req.params.id} not found`);
    }
    res.status(200).send(user);
  })
  .catch((err) => res.status(500).send(err));

module.exports = { userId };
