// Match literal backspace
const myRegex = /[\r][\n]/;

const myFound = myRegex.exec('\r\nasdasdasdasd');

console.log(myFound);

// To match null byte (\0) we should use \x00 (hex scape sequence)
