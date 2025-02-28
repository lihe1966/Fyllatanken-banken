//import { skapa_recept_url, Recipe } from "./recept_url";
import { skapa_recpt_url } from "./test2,js";
const skapa_recept_url = require('./test2')

// export class Recipe {
//     title: string;
//     port: number; //antal portioner
//     ingred: Array<string>
//     amounts: Array<string>
//     constructor(title: string, port: number, ingred: Array<string>, amounts: Array<string> = []) {
//         this.title = title;
//         this.port = port
//         this.ingred = ingred;
//         this.amounts = amounts;
//     }
// }

//const r1 = new Recipe("köttbulle",3, ["kött", "bulle"]);
const r1 = new Recipe("Köttbullar", 2, ["färs", "mjölk", "ströbröd", "gul lök", "ägg", "salt", "peppar"]);
const r2 = new Recipe("Havregrynsgröt", 3,["havregryn", "vatten", "salt"],["1 dl", "2,5 dl", "0,5 krm"]);



//recept från url
const r3 = skapa_recept_url("https://undertian.com/recept/graartsbolognese/");
const r4 = skapa_recept_url("https://undertian.com/recept/pad-thai-cheap-style/");
const r5 = skapa_recept_url("https://undertian.com/recept/tomatsoppa-med-ort-tomat-och-fetabrod-2/");
const r6 = skapa_recept_url("https://undertian.com/recept/gazpacho-med-bonbrod/");
const r7 = skapa_recept_url("https://undertian.com/recept/snabb-pasta-med-soltorkade-tomater-tahini-och-vita-bonor/");
const r8 = skapa_recept_url("https://undertian.com/recept/kramig-kalsas/");

console.log(r7.amounts[0], r7.ingred[0]);