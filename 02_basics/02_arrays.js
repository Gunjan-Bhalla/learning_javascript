const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heroes = ["Superman", "flash", "batman"]

marvel_heros.push(dc_heroes);
console.log(marvel_heros);
//output --> [ 'thor', 'Ironman', 'Spiderman', [ 'Superman', 'flash', 'batman' ] ]

const allHeros = marvel_heros.concat(dc_heroes)
console.log(allHeros);
/*OUTPUT
[
  'thor',
  'Ironman',
  'Spiderman',
  [ 'Superman', 'flash', 'batman' ],
  'Superman',
  'flash',
  'batman'
]
*/

const all_new_heroes = [...marvel_heros, ...dc_heroes]
console.log(all_new_heroes);
/* output
[
  'thor',
  'Ironman',
  'Spiderman',
  [ 'Superman', 'flash', 'batman' ],
  'Superman',
  'flash',
  'batman'
]
*/

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

/* OUTPUT:
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/

console.log(Array.isArray("Doraemon")); //output --> false
console.log(Array.from("Doraemon")); /*output --> [
    'D', 'o', 'r',
    'a', 'e', 'm',
    'o', 'n'
   ]
   */
console.log(Array.from({name: "Doraemon"})); //interesting //output --> []


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //output --> [ 100, 200, 300 ]
