// Characters with special meaning

// Character classes (Bracket expressions). This can list one or more characters

const re1 = /[abcdf]/;
const re2 = /[a-f]/;
// Yo can also combine several ranges and literals in one character class
const re3 = /[a-f_%0-9]/;

// Invert the behavior and negate them. We do this by adding a Caret (^)
const re4 = /[^abcdf]/;
const re5 = /[^a-f]/;
const re6 = /[^a-f_%0-9]/;
//Now it will match anything except the characters contained in the class

const myString = `
Hair cut        $25
Cut & wash      $40
Hair colouring  $70
Shave           $15
`;

const myRegex = /[$0-9]+/g;
const myArray = myRegex.exec(myString);
console.log(myArray);

// Match a literal dash from within a character class. Just make sure the dash is either at the very beginning or at the very end of the character class,  and it will be treated as a literal dash.
const re7 = /[A-Za-z_-]/;
// If you want to use a dash in a range, to start the range with the a dash, that range has to be the very first range in the character class. To end the range in a dash, it can be used anywhere.
const re8 = /[--/A-Z]/;
const re9 = /[A-Z+--]/;

// About the Caret ^ character, its similar. Just make sure its not the first character of your character class, and it will be treated as a literal
const re9 = /[A-Za-z^]/;

// Match brackets
const re10 = /[[]/;
const re11 = /[A-Z\[]/;
const re12 = /[A-Z\]]/;

// Pitfall (Avoid as possible)
// [A-z] This takes extra characters
// [9-0] Invalid
// [] invalid
// /[/ Invalid
