function parseNumber (str){
	const regex = /[-\s]/gm;
	const stripped = str.replace(regex, "");

	return stripped;
}

export default parseNumber;
