import AlternateUpperCase from './AlternateUpperCase';

describe('Capitalize alternate letters in a given string', () => {
	it('should convert string alternate letters to uppercase', () => {
		expect(AlternateUpperCase()).toBe(-1);
	  expect(AlternateUpperCase('hello world')).toBe('hElLo wOrLd');
	});	
});

