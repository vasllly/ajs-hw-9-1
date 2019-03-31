
import Character from '../src/js/Character';
import Team from '../src/js/Team';

test('add first Character in Team', () => {
  const team = new Team();
  const character = new Character('Персонаж');
  team.add(character);
  const received = team.toArray();
  const expected = [{
    name: 'Персонаж',
    level: 1,
    health: 100,
  }];
  expect(received).toEqual(expected);
});

test('add two Characters in Team', () => {
  const team = new Team();

  const character1 = new Character('Персонаж1');
  const character2 = new Character('Персонаж2');
  team.add(character1);
  team.add(character2);

  const received = team.toArray();
  const expected = [
    { name: 'Персонаж1', level: 1, health: 100 },
    { name: 'Персонаж2', level: 1, health: 100 },
  ];
  expect(received).toEqual(expected);
});

test('add two equal Characters in Team', () => {
  const team = new Team();

  const character1 = new Character('Персонаж1');
  team.add(character1);

  function repeatAdd() {
    team.add(character1);
  }
  expect(repeatAdd).toThrowError(new Error('Этот персонаж уже в команде!'));
});

test('add many Characters in Team', () => {
  const team = new Team();

  const character1 = new Character('Персонаж1');
  const character2 = new Character('Персонаж2');
  const character3 = new Character('Персонаж3');
  const character4 = new Character('Персонаж4');
  const character5 = new Character('Персонаж5');
  const character6 = new Character('Персонаж6');
  const character7 = new Character('Персонаж7');
  team.addAll(character1, character2, character3, character4, character5, character6);
  team.add(character7);

  const received = team.toArray();
  const expected = [
    { name: 'Персонаж1', level: 1, health: 100 },
    { name: 'Персонаж2', level: 1, health: 100 },
    { name: 'Персонаж3', level: 1, health: 100 },
    { name: 'Персонаж4', level: 1, health: 100 },
    { name: 'Персонаж5', level: 1, health: 100 },
  ];
  expect(received).toEqual(expected);
});
