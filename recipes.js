var Recipe = /** @class */ (function () {
    function Recipe(title, ingred, amounts) {
        if (amounts === void 0) { amounts = []; }
        this.title = title;
        this.ingred = ingred;
        this.amounts = amounts;
    }
    return Recipe;
}());
var r1 = new Recipe("köttbulle", ["kött", "bulle"]);
console.log(r1.title);
