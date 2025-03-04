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
var readline = require("readline");
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
//VARIABLES
var r1 = new Recipe("Köttbullar", 2, ["färs", "mjölk", "ströbröd", "gul lök", "ägg", "salt", "peppar"], ["500g", "1,5 dl", "5 msk", "1/2", "1", "1 tsk", "1 krm"]);
var r2 = new Recipe("Havregrynsgröt", 3, ["havregryn", "vatten", "salt"], ["1 dl", "2,5 dl", "0,5 krm"]);
var r3 = new Recipe("Pelmeni", 4, ["vetemjöl", "ägg", "salt", "färs", "gul lök", "salt", "peppar"], ["300g", "3", "1/2 tsk", "300g", "1", "1 krm", "1 krm"]);
var r4 = new Recipe("Omelett", 4, ["ägg", "mjölk", "salt", "peppar", "smör eller margarin"], ["6", "1 dl", "1/2 tsk", "1 krm", "2 msk"]);
var r5 = new Recipe("Lasagne", 4, ["gul lök", "vitlöksklyftor", "nötfärs", "olja", "tomatpuré", "torkad timjan", "torkad rosmarin", "krossade tomater", "köttbuljongtärning", "salt", "peppar", "torkade lasagneplattor", "smör", "vetemjöl", "mjölk"], ["2", "2", "500 g", "1 msk", "4 msk", "1 tsk", "1 tsk", "390 g", "1", "1 krm", "1 krm", "9", "6 msk", "6 msk", "10 dl"]);
var r6 = new Recipe("Havresoppa", 2, ["havregryn", "vatten", "salt", "brosk"], ["1 dl", "2,5 dl", "0,5 krm", "3 kg"]);
var allRecipes = [r1, r2, r3, r4, r5, r6];
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function askQuestion(query) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    rl.question(query, function (answer) {
                        resolve(answer.trim()); // Trim spaces for cleaner input
                    });
                })];
        });
    });
}
function add_ingredient() {
    return __awaiter(this, void 0, void 0, function () {
        var ingredients, userInput;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ingredients = [];
                    console.clear();
                    console.log("Skriv ner dina ingredienser en efter en. När du är klar, skriv 'klar'.");
                    _a.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 3];
                    return [4 /*yield*/, askQuestion(": ")];
                case 2:
                    userInput = _a.sent();
                    if (userInput.toLowerCase() === "klar") {
                        return [3 /*break*/, 3];
                    }
                    ingredients.push(userInput);
                    console.clear();
                    console.log("Nuvarande ingredienser:", ingredients.join(", "));
                    return [3 /*break*/, 1];
                case 3:
                    console.log("Dina ingredienser är:", ingredients.join(", "));
                    if (userInput != null) {
                        searchByIngred(ingredients, allRecipes);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function searchByIngred(ings, allRecipes) {
    return __awaiter(this, void 0, void 0, function () {
        var result, _loop_1, i, formattedResult, userInput;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    result = [];
                    _loop_1 = function (i) {
                        var countSame = ings.filter(function (val) { return allRecipes[i].ingred.includes(val); }).length;
                        if (countSame >= allRecipes[i].ingred.length - 3) { //Saknas fler än 3 ingredienser behöver receptet inte vara med
                            var tempArray = [allRecipes[i].title, countSame, allRecipes[i].ingred.length];
                            result.push(tempArray);
                        }
                    };
                    for (i = 1; i < allRecipes.length; i = i + 1) {
                        _loop_1(i);
                    }
                    result = result.sort(function (a, b) { return b[1] - a[1]; }); //Sortera
                    formattedResult = result.map(function (_a) {
                        var title = _a[0], count = _a[1], deniminator = _a[2];
                        return [title, "".concat(count, "/").concat(deniminator)];
                    });
                    console.log(formattedResult);
                    console.log("\n\n");
                    _a.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 3];
                    return [4 /*yield*/, askQuestion("Vill du söka upp något specifikt recept? ")];
                case 2:
                    userInput = _a.sent();
                    if (userInput === "ja" || userInput === "Ja") {
                        searchByName();
                        return [3 /*break*/, 3];
                    }
                    if (userInput === "nej" || userInput === "Nej") {
                        main();
                        return [3 /*break*/, 3];
                    }
                    else {
                        console.log("Felaktig input");
                    }
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function searchByName() {
    return __awaiter(this, void 0, void 0, function () {
        var found, userInput, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    found = false;
                    return [4 /*yield*/, askQuestion("Skriv in en rätt, om du vill gå ur skriv 'klar': ")];
                case 1:
                    userInput = _a.sent();
                    if (userInput === "klar") {
                        found = true;
                        main();
                    }
                    for (i = 1; i < allRecipes.length; i = i + 1) {
                        if (userInput.toLowerCase() === allRecipes[i].title.toLowerCase()) {
                            printRecipe(allRecipes[i]);
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        console.log("Receptet finns inte, testa igen");
                        searchByName();
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function printRecipe(recipe) {
    return __awaiter(this, void 0, void 0, function () {
        var userInput;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.clear();
                    console.log("Namn: " + recipe.title);
                    console.log("Antal portioner: " + recipe.port);
                    console.log("Ingredienser: " + recipe.ingred);
                    console.log("Mängder per ingrediens: " + recipe.amounts + "\n");
                    _a.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 3];
                    return [4 /*yield*/, askQuestion("Skriv 'klar' för att fortsätta: ")];
                case 2:
                    userInput = _a.sent();
                    if (userInput === "klar" || userInput === "Klar") {
                        main();
                        return [3 /*break*/, 3];
                    }
                    else {
                        console.log("Felaktig input");
                    }
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var userInput;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.clear();
                    console.log("Välkommen till fylla tanken-banken!");
                    console.log("Alterantiv\n 1. Sök recept efter ingredienser.\n 2. Sök recept.\n");
                    _a.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 3];
                    return [4 /*yield*/, askQuestion(":")];
                case 2:
                    userInput = _a.sent();
                    if (userInput === "1") {
                        add_ingredient();
                        return [3 /*break*/, 3];
                    }
                    if (userInput === "2") {
                        searchByName(); //Söker utan inmatade ingredienser.
                        return [3 /*break*/, 3];
                    }
                    console.log("Felaktig input\n");
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    });
}
main();
