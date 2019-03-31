
import Character from '../src/js/Character';

test('create Character', () => {
  const received = new Character('Персонаж');
  const expected = {
    name: 'Персонаж',
    level: 1,
    health: 100,
  };
  expect(received).toEqual(expected);
});
