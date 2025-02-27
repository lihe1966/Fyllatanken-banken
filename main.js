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
var jsdom_1 = require("jsdom");
var readline = require("readline");
var document = new jsdom_1.JSDOM("<!DOCTYPE html><p>Hello</p>").window.document;
var Recipe = /** @class */ (function () {
    function Recipe(title, ingred, amounts, time) {
        this.title = title;
        this.ingred = ingred;
        this.amounts = amounts;
        this.time = time;
    }
    return Recipe;
}());
//const prompt = PromptSync();
var r1 = new Recipe('Pancakes', ['Flour', 'Eggs', 'Milk'], ["2DL", "3", "5DL"], 15);
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
document.addEventListener('keydown', function (event) {
    if (event.key === '') {
        console.log('Escape key was pressed!');
    }
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
                    rl.close();
                    if (userInput != null) {
                        searchFunction(ingredients);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function searchFunction(ings) {
    console.log("ping");
}
function main() {
    console.clear();
    console.log("Välkommen till fylla tanken-banken!");
    console.log("Alterantiv\n 1. Sök recept.");
    add_ingredient();
    //console.log(r1);
}
main();
