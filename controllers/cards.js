const path = require('path');

const { getDataFromFile } = require('../helpers/files');

const dataPathFile = path.join(__dirname, '..', 'data', 'cards.json');

const cardsData = (req, res) => getDataFromFile(dataPathFile)
  .then((cards) => res.status(200).send(cards))
  .catch((err) => res.status(500).send(err));
module.exports = { cardsData };
