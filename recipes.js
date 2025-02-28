"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { skapa_recept_url, Recipe } from "./recept_url";
var test2_js_1 = require("./test2.js");
var skapa_recept_url = require('./test2.js');
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
var r1 = new test2_js_1.Recipe("Köttbullar", 2, ["färs", "mjölk", "ströbröd", "gul lök", "ägg", "salt", "peppar"]);
var r2 = new test2_js_1.Recipe("Havregrynsgröt", 3, ["havregryn", "vatten", "salt"], ["1 dl", "2,5 dl", "0,5 krm"]);
//recept från url
var r3 = skapa_recept_url("https://undertian.com/recept/graartsbolognese/");
var r4 = skapa_recept_url("https://undertian.com/recept/pad-thai-cheap-style/");
var r5 = skapa_recept_url("https://undertian.com/recept/tomatsoppa-med-ort-tomat-och-fetabrod-2/");
var r6 = skapa_recept_url("https://undertian.com/recept/gazpacho-med-bonbrod/");
var r7 = skapa_recept_url("https://undertian.com/recept/snabb-pasta-med-soltorkade-tomater-tahini-och-vita-bonor/");
var r8 = skapa_recept_url("https://undertian.com/recept/kramig-kalsas/");
console.log(r7.amounts[0], r7.ingred[0]);
