import ToUpperCase from './ToUpperCase';

describe('Capitalize the given string', () => {
	it('should convert the string to uppercase', () => {
		expect(ToUpperCase()).toBe(-1);
	  expect(ToUpperCase('hello world')).toBe('HELLO WORLD');
	});	
});
