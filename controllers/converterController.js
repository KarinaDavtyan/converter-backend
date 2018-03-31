const myFunctions = require('../helpers/converter');

const { converter } = myFunctions;

const convertNumber = async (req, res) => {
  const { text } = req.params;
  const words = converter(text)
  res.send(words);
}

module.exports = { convertNumber };
