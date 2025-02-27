/**class Recipe {
    title: string;
    port: number; //antal portioner
    ingred: Array<string>
    amounts: Array<string>
    constructor(title: string, port: number, ingred: Array<string>, amounts: Array<string> = []) {
        this.title = title;
        this.port = port
        this.ingred = ingred;
        this.amounts = amounts;
    }
}
const r1 = new Recipe("Köttbullar", 2, ["färs", "mjölk", "ströbröd", "gul lök", "ägg", "salt", "peppar"]);
const r2 = new Recipe("Havregrynsgröt",3,["havregryn", "vatten", "salt"],["1 dl", "2,5 dl", "0,5 krm"]);
//const r3 = new Recipe("")
**/
//console.log(r2.title);
var Recipe = /** @class */ (function () {
    function Recipe(title, port, ingred, amounts) {
        if (amounts === void 0) { amounts = []; }
        this.title = title;
        this.port = port;
        this.ingred = ingred;
        this.amounts = amounts;
    }
    return Recipe;
}());
var r1 = new Recipe("Köttbullar", 2, ["färs", "mjölk", "ströbröd", "gul lök", "ägg", "salt", "peppar"], ["500g", "1,5 dl", "5 msk", "1/2", "1", "1 tsk", "1 krm"]);
var r2 = new Recipe("Havregrynsgröt", 3, ["havregryn", "vatten", "salt"], ["1 dl", "2,5 dl", "0,5 krm"]);
var r3 = new Recipe("Pelmeni", 4, ["vetemjöl", "ägg", "salt", "färs", "gul lök", "salt", "peppar"], ["300g", "3", "1/2 tsk", "300g", "1", "1 krm", "1 krm"]);
//const r4 = new Recipe("")
console.log(r1.title);
