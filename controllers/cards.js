const { getDataFromFile } = require("../helpers/files");
const path = require("path");
const dataPathFile = path.join(__dirname, "..", "data", "cards.json");

const cardsData = (req, res) => {
  return getDataFromFile(dataPathFile)
    .then((cards) => res.status(200).send(cards))
    .catch((err) => res.status(500).send(err));
};
module.exports = { cardsData };
