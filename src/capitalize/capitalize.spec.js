import capitalizeFirstLetter from './capitalize';

test('capitalizes the first letter of a word', () => {
  expect(capitalizeFirstLetter('buddy')).toBe('Buddy');
});
