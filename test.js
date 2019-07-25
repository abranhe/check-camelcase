import test from 'ava';
import checkCamelcase from '.';

test('Checking if is camelcase', t => {
	t.true(checkCamelcase('camelCase'));
	t.true(checkCamelcase('Camelcase'));
	t.true(checkCamelcase('PascalCase'));
	t.true(checkCamelcase('Darwin_Case'));
	t.false(checkCamelcase('camelcase'));
	t.false(checkCamelcase('snake_case'));
	t.false(checkCamelcase('random string'));
});
