const shortWords = require('../dictionary/shortWords');
const mediumWords = require('../dictionary/mediumWords');
const longWords = require('../dictionary/longWords');


const realWordChecker = (input, page) => {
  const combinations = input;
  const dictionary = combinations[0].length < 9
    ? combinations[0].length >= 4
      ? mediumWords : shortWords
    : longWords;
  try {
    const result = combinations.filter(combination => {
      return dictionary.words.indexOf(combination) > 0
    });
    const output = result.length > 0 ? result : input;
    return output.length > 100 ? output.splice((page-1)*100, 100) : output;
  } catch (e) {
    return null;
  }
}

module.exports = { realWordChecker };
