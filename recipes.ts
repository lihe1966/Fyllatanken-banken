class Recipe {
    title: string;
    ingred: Array<string>
    amounts: Array<string>
    constructor(title: string, ingred, amounts = []) {
        this.title = title;
        this.ingred = ingred;
        this.amounts = amounts;
    }
}

const r1 = new Recipe("köttbulle",["kött", "bulle"]);

console.log(r1.title);