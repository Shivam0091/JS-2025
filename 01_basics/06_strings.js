let name = "Shivam Kushwaha"
let repoCnt = 89
// console.log(`Hello my name is ${name} and my repo cnt is ${repoCnt}`)

// let gameName = new String('Shivam')
// console.log(gameName[6])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toLocaleUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('m'))

// String to Array Conversion
const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(' ');
console.log(words[8]);
// Expected output: "fox"
const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"
const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

const gameColor = "shivam_Rahul_Pankaj_Vidya_Om"
console.log(gameColor.split())

// Replace Function
const url = "https://www.codewithharry.com/#google_vignette"
console.log(url.replace('#google','-'))