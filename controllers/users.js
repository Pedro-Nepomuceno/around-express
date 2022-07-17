const { getDataFromFile } = require("../helpers/files");
const path = require("path");
const dataPathFile = path.join(__dirname, "..", "data", "users.json");

const getUsers = (req, res) => {
  return getDataFromFile(dataPathFile)
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(500).send(err));
};

module.exports = { getUsers };
