const keyBoard = {
  1: [
    ' '
  ],
  2: [
    'a','b','c'
  ],
  3: [
    'd','e','f'
  ],
  4: [
    'g','h','i'
  ],
  5: [
    'j','k','l'
  ],
  6: [
    'm','n','o'
  ],
  7: [
    'p','q','r','s'
  ],
  8: [
    't','u','v'
  ],
  9: [
    'w','x','y','z'
  ]
}

const converter = (input) => {
  if (!input) return null;
  if (input && typeof input !== 'string') return null;
  const chars = input.split('');
  if (chars.length === 1) return keyBoard[input];
  const subsetWords =  converter(chars.slice(1).join(''));
  const words = [];
  keyBoard[input[0]].forEach(char => {
    subsetWords.forEach(word => words.push(char+word))
  })
  return words;
}

module.exports = {
  converter
};
