import Character from '../js/Character';
import Team from '../js/Team';

test('create first team player ', () => {
  const person = new Character('ivan', 'Magician');
  const team = new Team();
  team.add(person);
  expect(team.toArray()).toEqual([person]);
});
test('add two different team player ', () => {
  const person = new Character('ivan', 'Magician');
  const person1 = new Character('ivввan', 'Magician');
  const team = new Team();
  team.addAll(person, person1);
  expect(team.toArray()).toEqual([person, person1]);
});
test('create two same player to catch error ', () => {
  const person = new Character('ivan', 'Magician');
  const team = new Team();
  team.add(person);
  expect(() => team.add(person)).toThrow();
});
