// Реализуйте функцию, которая на вход принимает объект вида: {name: 'Маг', health: 90}
// И возвращает ответ в виде одной из строк: healthy, wounded, critical
// Здоровье более 50 - зелёный;
// Здоровье от 50 и до 15 - жёлтый;
// Менее 15 - красный.

export default function getHealth(hero) {
  let result = 'unknown';

  if (hero.health > 50) {
    result = 'healthy';
  } else if (hero.health > 15) {
    result = 'wounded';
  } else {
    result = 'critical';
  }
  return result;
}
