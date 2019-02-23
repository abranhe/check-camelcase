import test from 'ava';
import checkCamelCase from '.';

test('Checking if is camelcase', (t) => {
  t.true(checkCamelCase('camelCase'));
  t.true(checkCamelCase('Camelcase'));
  t.true(checkCamelCase('PascalCase'));
  t.true(checkCamelCase('Darwin_Case'));
  t.false(checkCamelCase('camelcase'));
  t.false(checkCamelCase('snake_case'));
  t.false(checkCamelCase('random string'));
});
