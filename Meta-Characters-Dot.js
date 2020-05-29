/* Wildcard: . (dot)
The dot will general match anything except for the new line character(\n), but it can be match too with a modifier: dotall 
It losses it special meaning in a chracter class
It dont have sense to use character class with this, because dot match everything. */

/* Pitfalls 
  Use dont and a quantifier (+) could make your regex very slow
*/
