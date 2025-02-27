

class Recipe {
    title: string;
    port: number; //antal portioner
    ingred: Array<string>
    amounts: Array<string>
    constructor(title: string, port: number, ingred: Array<string>, amounts: Array<string> = []) {
        this.title = title;
        this.port = port;
        this.ingred = ingred;
        this.amounts = amounts;
    }
}

const r1 = new Recipe("Köttbullar", 2, ["färs", "mjölk", "ströbröd", "gul lök", "ägg", "salt", "peppar"],["500g", "1,5 dl", "5 msk", "1/2", "1", "1 tsk", "1 krm" ]);
const r2 = new Recipe("Havregrynsgröt", 3,["havregryn", "vatten", "salt"],["1 dl", "2,5 dl", "0,5 krm"]);
const r3 = new Recipe("Pelmeni", 4,["vetemjöl", "ägg", "salt", "färs", "gul lök", "salt", "peppar"],["300g", "3", "1/2 tsk", "300g", "1", "1 krm", "1 krm"]);
const r4 = new Recipe("Omelett", 4, ["ägg", "mjölk", "salt", "peppar", "smör eller margarin"],["6", "1 dl", "1/2 tsk", "1 krm", "2 msk"]);
const r5 = new Recipe("Lasagne", 4, ["gul lök", "vitlöksklyftor", "nötfärs", "olja", "tomatpuré", "torkad timjan", "torkad rosmarin", "krossade tomater", "köttbuljongtärning", "salt", "peppar", "torkade lasagneplattor","smör", "vetemjöl", "mjölk"],["2", "2", "500 g", "1 msk", "4 msk","1 tsk", "1 tsk", "390 g", "1", "1 krm", "1 krm", "9", "6 msk", "6 msk", "10 dl"]);

console.log(r4.port); 

