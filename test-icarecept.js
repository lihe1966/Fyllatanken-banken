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
exports.Recipe = void 0;
exports.default = skapa_recept_url;
var puppeteer_1 = require("puppeteer");
var fs_1 = require("fs");
var Recipe = /** @class */ (function () {
    function Recipe(title, port, ingred, amounts) {
        if (port === void 0) { port = null; }
        if (amounts === void 0) { amounts = []; }
        this.title = title;
        this.port = port;
        this.ingred = ingred;
        this.amounts = amounts;
    }
    return Recipe;
}());
exports.Recipe = Recipe;
/**
 * Hämtar recept från ica.se/recept och lagrar som en Recipe-klass
 * @example
 * skapa_recept_url('https://www.ica.se/recept/havregrynsgrot-730321/')
 * // results in:
 * // Recipe {
 * //   title: 'Havregrynsgröt',
 * //   port: 1,
 * //   ingred: ['havregryn', 'vatten', 'salt', 'mjölk', 'lingonsylt eller äppelmos', 'rårivna eller hackade äpplen', 'honung'],
 * //   amounts: ['1 dl', '2 1/2 dl', '1/2 krm', '', '', '', '']
 * // }
 * @param {string} url - Länk till ett recept på ICA.se
 * @returns {Promise<Recipe>} Ett Promise som innehåller ett Recipe-objekt
 */
function skapa_recept_url(url) {
    return __awaiter(this, void 0, void 0, function () {
        var browser, page, title, port, amounts, ingredients, r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, puppeteer_1.default.launch({ headless: true })];
                case 1:
                    browser = _a.sent();
                    return [4 /*yield*/, browser.newPage()];
                case 2:
                    page = _a.sent();
                    return [4 /*yield*/, page.goto(url, { waitUntil: 'networkidle2' })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, page.evaluate(function () {
                            var h1 = document.querySelector('h1');
                            return h1 ? h1.innerText.trim() : null;
                        })];
                case 4:
                    title = _a.sent();
                    // Vänta på att ingredienslistan laddas in
                    return [4 /*yield*/, page.waitForSelector('#ingredients')];
                case 5:
                    // Vänta på att ingredienslistan laddas in
                    _a.sent();
                    return [4 /*yield*/, page.evaluate(function () {
                            var _a;
                            try {
                                var portElement = document.querySelector(".ingredients-change-portions div") ||
                                    document.querySelector(".default-portions");
                                if (!portElement)
                                    return null;
                                var portText = (_a = portElement.textContent) === null || _a === void 0 ? void 0 : _a.trim().replace(/\D/g, ""); // Tar bort allt utom siffror
                                return portText ? parseInt(portText, 10) : null;
                            }
                            catch (error) {
                                return null;
                            }
                        })];
                case 6:
                    port = _a.sent();
                    return [4 /*yield*/, page.evaluate(function () {
                            return Array.from(document.querySelectorAll('#ingredients .ingredients-list-group__card'))
                                .map(function (ing) {
                                var _a, _b;
                                var qty = ing.querySelector('.ingredients-list-group__card__qty');
                                return qty ? (_b = (_a = qty.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : "" : "";
                            });
                        })];
                case 7:
                    amounts = _a.sent();
                    return [4 /*yield*/, page.evaluate(function () {
                            return Array.from(document.querySelectorAll('#ingredients .ingredients-list-group__card'))
                                .map(function (ing) {
                                var _a, _b, _c;
                                var qty = ing.querySelector('.ingredients-list-group__card__qty');
                                var ingredientText = (_b = (_a = ing.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : "";
                                if (qty) {
                                    ingredientText = ingredientText.replace((_c = qty.textContent) !== null && _c !== void 0 ? _c : "", '').trim();
                                }
                                return ingredientText || "";
                            });
                        })];
                case 8:
                    ingredients = _a.sent();
                    return [4 /*yield*/, browser.close()];
                case 9:
                    _a.sent();
                    r = new Recipe(title !== null && title !== void 0 ? title : "Okänt recept", port, ingredients, amounts);
                    return [2 /*return*/, r];
            }
        });
    });
}
/**
 * Hämtar ett recept från en given URL och sparar det i en TypeScript-fil.
 *
 * @example
 * save_recipe('https://www.ica.se/recept/havregrynsgrot-730321/')
 * // Sparar receptet i 'recipe.ts' i följande format:
 * // const r123 = new Recipe(
 * //    "Havregrynsgröt",
 * //    1,
 * //    ["havregryn", "vatten", "salt", "mjölk", "lingonsylt eller äppelmos",
 * //    "rårivna eller hackade äpplen", "honung"],
 * //    ["1 dl", "2 1/2 dl", "1/2 krm", "", "", "", ""]
 * // );
 *
 * @param {string} url - En giltig URL till ett recept på ica.se
 * @precondition URL:en måste peka på ett recept från ica.se/recept
 * @returns {Promise<void>} Returnerar inget, men sparar receptet i en fil
 */
function save_recipe(url) {
    return __awaiter(this, void 0, void 0, function () {
        var recipe, recipeContent;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, skapa_recept_url(url)];
                case 1:
                    recipe = _a.sent();
                    if (!recipe) {
                        console.error('Misslyckades att hämta receptet.');
                        return [2 /*return*/];
                    }
                    recipeContent = "\n\nconst r".concat(Date.now(), " = new Recipe(\n    ").concat(JSON.stringify(recipe.title), ",\n    ").concat(recipe.port, ",\n    ").concat(JSON.stringify(recipe.ingred), ",\n    ").concat(JSON.stringify(recipe.amounts), "\n);");
                    // Lägg till receptet i filen utan att skriva över tidigare data
                    return [4 /*yield*/, fs_1.promises.appendFile('recipe.ts', recipeContent, 'utf8')];
                case 2:
                    // Lägg till receptet i filen utan att skriva över tidigare data
                    _a.sent();
                    console.log('Receptet har lagts till i recipe.ts!');
                    return [2 /*return*/];
            }
        });
    });
}
// Exempelanrop
var url = "https://www.ica.se/recept/havregrynsgrot-730321/";
//skapa_recept_url(url);
save_recipe(url);
