import fruit from "./foods";
import { choice, remove } from "./helpers";

let randomFruit = choice(fruit);
console.log(`I'd like one ${randomFruit}, please.`);
console.log(`Here you go: ${randomFruit}`);
console.log(`Delicious! May I have another?`);
let remaining = remove(fruit, randomFruit);
console.log(`I'm sorry, we're all out.  We have ${remaining.length} left.`);
