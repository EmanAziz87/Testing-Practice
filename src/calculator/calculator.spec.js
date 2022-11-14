import calculator from './calculator';

describe('A calculator', () => {
  test('sum two number', () => {
    expect(calculator(1, '+', 2)).toBe(3);
  });

  test('subtract two numbers', () => {
    expect(calculator(4, '-', 3)).toBe(1);
  });

  test('multiply two numbers', () => {
    expect(calculator(3, '*', 9)).toBe(27);
  });

  test('divide two numbers', () => {
    expect(calculator(8, '/', 2)).toBe(4);
  });
});
