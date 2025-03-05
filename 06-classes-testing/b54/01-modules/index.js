import * as bank from "./bank.js";
import { accounts, add } from "./bank.js";
import whatever from "./bank.js";

bank.add();
add();
console.log("Alive!");
console.log(whatever);

const obj = {
  key: "value",
};

console.log(JSON.stringify(obj));
const obj2 = JSON.parse('{"key":"value"}');
console.log(obj2);
