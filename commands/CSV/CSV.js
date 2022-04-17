import { readFileSync, writeFileSync, existsSync } from 'fs';

export default (str) => {
	if (!str) {
		console.log('Please enter string');
		return -1;
	}

	if (!existsSync('data.csv')) {
  	writeFileSync('data.csv', [...str].join(','));
  	console.log('CSV created!');

  	return 'CSV created!';
	}


	const content = readFileSync('data.csv', 'utf8');
  const newContent = content.replace(content, [...str].join(','));

  writeFileSync('data.csv', newContent);
	console.log('CSV created!');

	return 'CSV created!';
}
