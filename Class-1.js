/* Esta expresión regular dice que agarre todos los caracteres juntos en mayuscula de la A a la F y del 0 al 9 después de un numeral el cual es opcional que esté*/
let re = /#?[A-F0-9]+/;

// Este regex indica que solo queremos agarrar 6 caracteres seguidos que cumplan este patrón
let re2 = /#?[A-F0-9]{6}/;

// Este regex indica que agarre seis caracteres seguidos después del # que cumplan el patrón o 3.
let re3 = /#?[A-F0-9]{6}|[A-F0-9]{3}/;

// Este regex hace que solo se tome como variable lo que está en parentesis, es decir que para uno u otro patrón cumplido, en ambos se toma en cuenta la parte del # opcional
let re4 = /#?([A-F0-9]{6}|[A-F0-9]{3})/;
// ESte hace que también agarre las letras minusculas
let re5 = /#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/;
// Este hace que ignoren el case de las letras
let re6 = /#?([A-F0-9]{6}|[A-F0-9]{3})/i;

// Los anteriores regex buscarían en todo el string dado, todas las veces que se cumpla el patrón

// Este hace especificamente que inicie y termine cumpliendo el patrón (tome todo el string entregado para analizar) ^ para que se busque que esté desde el inicio y $ hasta el final
let re7 = /^#?([A-F0-9]{6}|[A-F0-9]{3})$/i;

let myArray = re8.exec('#00FF22');

console.log(myArray);
