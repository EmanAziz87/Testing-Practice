import caesarCipher from './caesarCipher';

describe('Caesar Cipher: all letters will be shifted based on an encryption key', () => {
  test('shift all characters of a string based on the encryption amount', () => {
    expect(caesarCipher('bro', 3)).toBe('eur');
  });

  test('shifted values past z will wrap back to a', () => {
    expect(caesarCipher('xray', 5)).toBe('cwfd');
  });

  test('works with punctuation', () => {
    expect(caesarCipher('xray, xray.', 5)).toBe('cwfd, cwfd.');
  });
});
