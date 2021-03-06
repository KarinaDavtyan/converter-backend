const converterFunctions = require('../helpers/converter');
const realWordCheckerFunctions = require('../helpers/realWordChecker');

const { converter } = converterFunctions;
const { realWordChecker } = realWordCheckerFunctions;

const convertNumber = async (req, res) => {
  const { text, page } = req.params;
  if (text === 'favicon.ico' || !text) {
    res.sendStatus(400);
  } else {
    const words = converter(text);
    if (words === null) res.sendStatus(400);
    const realWords = realWordChecker(words, page);
    if (realWords === null) res.sendStatus(400);
    const output = realWords.length > 100 ? realWords.splice((page-1)*100, 100) : realWords;
    res.status(200).send(output);
  }
}

module.exports = { convertNumber };
