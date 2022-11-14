function capitalizeFirstLetter(word) {
  const wordArr = word.split('');
  const upperCaseFirstLetter = wordArr[0].toUpperCase();
  wordArr[0] = upperCaseFirstLetter;
  return wordArr.join('');
}

export default capitalizeFirstLetter;
