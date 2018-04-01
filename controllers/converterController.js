const converterFunctions = require('../helpers/converter');
const realWordCheckerFunctions = require('../helpers/realWordChecker');

const { converter } = converterFunctions;
const { realWordChecker } = realWordCheckerFunctions;


const convertNumber = async (req, res) => {
  const { text } = req.params;
  console.log(text);
  const words = converter(text);
  const realWords =realWordChecker(words);
  res.send(realWords);
}

module.exports = { convertNumber };
