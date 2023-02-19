

import fruits from "./foods";
import { rand, removeItem } from "./helpers";


let fruit= rand(fruits)

console.log(`I'd like one ${fruit}, please`);
console.log(`Here you go : ${fruit}`);
console.log(`Delicious! May I have another ?`)

let remaining = removeItem(fruits,fruit);

console.log(`I am sorry , we are all out ,We have ${remaining.length} left`)


