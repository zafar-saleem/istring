export default (str) => {
  if (!str) {
  	console.log('Please provide string');
  	
  	return -1;
  }

  let isUpper = false;

  const updatedStr = [...str]
    .map((char) => {
      if (isUpper) {
        isUpper = false;

        return char.toUpperCase();
      }
      
      isUpper = true;

      return char.toLowerCase();
    })
    .join('');

  console.log(updatedStr);

  return updatedStr;
}
