import { isBissexto } from '../isBissexto';

test('todos anos divisiveis por 400 devem ser bissextos', () => {
  expect(isBissexto(400)).toBe(true);
  expect(isBissexto(800)).toBe(true);
  expect(isBissexto(2000)).toBe(true);
});

test('todo ano divisivel por 4 e não divisivel por 100 (a não ser divisivel por 400) deve ser bissexto', () => {
  expect(isBissexto(16)).toBe(true);
  expect(isBissexto(200)).toBe(false);
  expect(isBissexto(16)).toBe(true);
  expect(isBissexto(840)).toBe(true);
  expect(isBissexto(3000)).toBe(false);
});

