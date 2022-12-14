//importing

/*
import playGuitar from "./guitar.js";
import { shredding as shred, plucking as pluck } from "./guitar.js";

console.log(playGuitar());
console.log(shred());
console.log(pluck());
*/


import * as Guitars from "./guitar.js";

console.log(Guitars.playGuitar());//this will give an error so we should either type Guitars.default or just erase the default from the sub js file
console.log(Guitars.shredding());
console.log(Guitars.plucking());

import User from "./user.js";
const me = new User("email@email.com", "Jane");
console.log(me);
console.log(me.greeting());

//babble tool - bundles all the files and transfers from new js to old js that can support in old browsers, to do this babble tool is also used together with the bundle.
