function caesarCipher(word, encryptionAmount) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const wordArr = word.split('');

  for (let i = 0; i < wordArr.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (wordArr[i] === alphabet[j]) {
        const indexAfterEncryption = j + encryptionAmount;
        if (indexAfterEncryption > 25) {
          const indexWrap = indexAfterEncryption - 26;
          wordArr[i] = alphabet[indexWrap];
          break;
        } else {
          wordArr[i] = alphabet[indexAfterEncryption];
          break;
        }
      }
    }
  }

  return wordArr.join('');
}

export default caesarCipher;
