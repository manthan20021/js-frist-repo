const name = "manthan"
const repoCount = 50

//console.log(name + repoCount) // note => this is a old methode 

console.log('Hello my name is ${name} and my repo count is ${repoCount}');  // note => allwes go with this bicos of this is a moer redebel and morden method.

const gameName = new String ('shiva') //another wey to deeclear a string.

console.log(gameName[2]);  // to acsess the keevalue.

console.log(gameName.__proto__);  // to acsess the prototype.

console.log(gameName.length);  // to acsess the length.

console.log(gameName.toUpperCase ());  // to convert the text in upperCase.

console.log(gameName.charAt(3));  // to find the posishion of carester/allfabet,but the help of number.

console.log(gameName.indexOf('v'));  // to find the posishion of carecter/allfabet,but the help of carekter/allfabet.


const newString = gameName.substring(0, 3) // to devaid in substring, and allwes remember the last valu is not cansider.

console.log(newString);


const anotherString = gameName.slice(-5, 2)

console.log(anotherString); // nigetiv subsring.


const newStringOne = "  manthanh  "

console.log(newStringOne);
console.log(newStringOne.trim()); //trim is the ueis for cut/trim the extra spses, ther is a 2 part of trim, trim-start and trim-eand. 


const url = "https://manthan.com/manthan%30harale"

console.log(url.replace('%30', '+')) //to replace the url.