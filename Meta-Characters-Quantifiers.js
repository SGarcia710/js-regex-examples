/* Quantifiers and Greediness (indicate repetition) */
// ?: Meaning maybe match. (zero or one times)
// +: meaning repeat as often as possible but at least once. (one or more times(unlimited))
// *: (Asterisk or clean star) to indicate we want to repeat as often as possible, but we will accept no match too. (zero or more times(unlimited))
// {n}: This gives us more the way to indicate the exact quantity we want. (exactly n times )
// {n,}: or a a range to indicate the minimum and the maximum. (n or more times(unlimited))
// {n,m}: between n and m times
// {,m}: between 0 and m times. Same as {0,m} This one is new, so it couldnt be available in all the languages, so its a good practice to avoid it and use {0,m} instead

// Apply Quantifieres to units
// A unit is the singular part of the regular expression pattern proceeding it, be this a string literal, a character class or a group
const re1 = /abcd+/; // + affects the d
const re2 = /[ab]*cd/; // * affects the [ab]
const re3 = /a(b|c)?d/; // ? affects the (b|c)

// Example
const myString = 'We take one step forward, two steps back';
const myRegex1 = /one.*/; // one step forward, two steps back
const myRegex2 = /one.*s/; // one step forward, two steps
const myRegex3 = /one.*s./; // one step forward, two steps(space)
const myRegex4 = /one.*s.?t/; // one step forward, two st
const myRegex5 = /one.*s.?t[a-z]/; // one step forward, two ste
const myRegex6 = /one.*s.?t[a-z]+/; // one step forward, two steps
const myRegex7 = /one.*s.?t[a-z]+p/; // one step forward, two step
const myRegex8 = /one.*s.?t[a-z]+p /; // one step(space)
const myRegex8 = /one.*s.?t[a-z]+p .{2,},/; // one step forward,

// The next time the regex encounters a quantifier, it will go to the end of the string and go step for step back searching a match of the pattern, and it will continue to do so iuntil it has either found a coplete match or has exhausted all possible options without finding one.
// This stepping back is called Backtracing, and if the regex has to do a lot of this, it can quickly become very slow as it has to go over the string again and again and again until it finds a match.
