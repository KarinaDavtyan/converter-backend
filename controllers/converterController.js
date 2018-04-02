const converterFunctions = require('../helpers/converter');
const realWordCheckerFunctions = require('../helpers/realWordChecker');

const { converter } = converterFunctions;
const { realWordChecker } = realWordCheckerFunctions;

const convertNumber = async (req, res) => {
  const { text } = req.params;
  if (text === 'favicon.ico' || !text) {
    res.sendStatus(400);
  } else {
    const words = converter(text);
    if (words === null) res.sendStatus(400);
    const realWords = realWordChecker(words);
    res.status(200).send(realWords);
  }
}

module.exports = { convertNumber };
