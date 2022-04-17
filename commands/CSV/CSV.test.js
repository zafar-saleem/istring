import 'regenerator-runtime/runtime';
import CSV from './CSV';
import { readFileSync } from 'fs';

describe('Modify CSV file', () => {
  it('should create and add columns to CSV file', async () => {
	    const file = `${process.cwd()}/data.csv`;
	    const expectedResult = `h,e,l,l,o, ,w,o,r,l,d`;

	    await CSV('hello world');

	    const result = readFileSync(file, 'utf8');
	    expect(result).toEqual(expectedResult);
	});
});
