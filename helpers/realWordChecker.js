const shortWords = require('../dictionary/shortWords');
const mediumWords = require('../dictionary/mediumWords');
const longWords = require('../dictionary/longWords');


const realWordChecker = (input, page) => {
  const combinations = input;
  const dictionary = combinations[0].length < 9
    ? combinations[0].length > 4
      ? mediumWords : shortWords
    : longWords;
  try {
    const result = combinations.filter(combination => {
      return dictionary.words.indexOf(combination) > 0
    });
    return output = result.length > 0 ? result : input;
  } catch (e) {
    return null;
  }
}

module.exports = { realWordChecker };
