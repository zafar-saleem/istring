export default (str) => {
	if (!str) {
		console.log('Please provide string.');

		return -1;
	}

	const toUpper = str.toUpperCase();
	
	console.log(toUpper);

	return toUpper;
}
