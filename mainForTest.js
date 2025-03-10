"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchByIngred = searchByIngred;
exports.searchByName = searchByName;
exports.printRecipe = printRecipe;
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
function searchByIngred(ings, allRecipes) {
    var result = []; //titel, mängd korrekta ingredienser, totalt ingredienser i receptet 
    var _loop_1 = function (i) {
        var countSame = ings.filter(function (val) { return allRecipes[i].ingred.includes(val); }).length;
        if (countSame >= allRecipes[i].ingred.length - 3) { //Saknas fler än 3 ingredienser behöver receptet inte vara med
            var tempArray = [allRecipes[i].title, countSame, allRecipes[i].ingred.length];
            result.push(tempArray);
        }
    };
    for (var i = 0; i < allRecipes.length - 1; i = i + 1) {
        _loop_1(i);
    }
    result = result.sort(function (a, b) { return b[1] - a[1]; }); //Sortera
    var formattedResult = result.map(function (_a) {
        var title = _a[0], count = _a[1], deniminator = _a[2];
        return [title, "".concat(count, "/").concat(deniminator)];
    }); //Formaterad
    return formattedResult;
}
function searchByName(userInput, allRecipes) {
    var found = false;
    if (userInput === "klar") {
        found = true;
        main();
    }
    for (var i = 0; i < allRecipes.length - 1; i = i + 1) {
        if (userInput.toLowerCase() === allRecipes[i].title.toLowerCase()) {
            printRecipe(allRecipes[i]);
            found = true;
            return found;
        }
    }
    if (!found) {
        found = false;
        return found;
    }
}
function printRecipe(recipe) {
    console.clear();
    console.log("Namn: " + recipe.title);
    console.log("Antal portioner: " + recipe.port);
    console.log("Ingredienser: " + recipe.ingred);
    console.log("Mängder per ingrediens: " + recipe.amounts + "\n");
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.clear();
            console.log("Välkommen till fylla tanken-banken!");
            console.log("Alterantiv\n 1. Sök recept efter ingredienser.\n 2. Sök recept.\n");
            return [2 /*return*/];
        });
    });
}
