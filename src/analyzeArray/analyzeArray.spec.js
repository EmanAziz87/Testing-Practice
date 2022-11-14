import analyzeArray from './analyzeArray';

describe('inputs array of numbers and returns object with avg, min, max, and length values', () => {
  test('return object with avg value', () => {
    expect(analyzeArray([3, 7, 5])).toEqual({
      average: 5,
      min: 3,
      max: 7,
      length: 3,
    });
  });
});
