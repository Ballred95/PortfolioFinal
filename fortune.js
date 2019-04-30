import {fortune} from './fortarray.js'

console.log(fortune)
// button

let randomNumber = Math.floor(Math.random() * (fortune.length));
document.getElementById('display').innerHTML= fortune[randomNumber];
 




