const shortWords = require('../dictionary/shortWords');
const mediumWords = require('../dictionary/mediumWords');
const longWords = require('../dictionary/longWords');


const realWordChecker = (input) => {
  const combinations = input;
  let result = [];
  const dictionary = combinations[0].length <= 9
    ? combinations[0].length >= 4
      ? mediumWords : shortWords
    : longWords;
  combinations.forEach(comb => {
    let matchedWords = dictionary.words.filter((word) => {
      let match = word.match(new RegExp(`^${comb}$`));
      if (match !== null) {
        return result.push(comb);
      }
    })
  })
  const output = result.length > 0 ? result : input;
  return output;
}
module.exports = {realWordChecker};
