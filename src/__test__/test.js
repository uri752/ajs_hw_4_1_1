// Реализуйте функцию, которая на вход принимает объект вида: {name: 'Маг', health: 90}
// И возвращает ответ в виде одной из строк: healthy, wounded, critical
// Здоровье более 50 - зелёный;
// Здоровье от 50 и до 15 - жёлтый;
// Менее 15 - красный.

import getHealth from '../getHealth';

test('getHealth test healthy', () => {
  const hero = { name: 'Маг', health: 90 };
  const result = getHealth(hero);
  expect(result).toBe('healthy');
});

test('getHealth test wounded', () => {
  const hero = { name: 'Маг', health: 40 };
  const result = getHealth(hero);
  expect(result).toBe('wounded');
});

test('getHealth test critical', () => {
  const hero = { name: 'Маг', health: 10 };
  const result = getHealth(hero);
  expect(result).toBe('critical');
});
