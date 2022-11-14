function reverseString(word) {
  const wordArr = word.split('');
  return wordArr.reverse().join('');
}

console.log(reverseString('whatsup'));

export default reverseString;
