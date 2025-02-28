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
exports.skapa_recept_url = skapa_recept_url;
//import { Recipe } from './recipes';
var puppeteer = require('puppeteer');
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
var url = 'https://undertian.com/recept/graartsbolognese/';
function skapa_recept_url(url) {
    return __awaiter(this, void 0, void 0, function () {
        var browser, page, title, ingredients, amounts, r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, puppeteer.launch({ headless: true })];
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
                    console.log('Titel:', title);
                    // Vänta på att ingredienslistan laddas in
                    return [4 /*yield*/, page.waitForSelector('.ingredients .ingredients-group ul')];
                case 5:
                    // Vänta på att ingredienslistan laddas in
                    _a.sent();
                    return [4 /*yield*/, page.evaluate(function () {
                            return Array.from(document.querySelectorAll('.ingredients .ingredients-group ul li span:nth-child(3)'))
                                .map(function (li) { return li.innerText.trim(); });
                        })];
                case 6:
                    ingredients = _a.sent();
                    return [4 /*yield*/, page.evaluate(function () {
                            return Array.from(document.querySelectorAll('.ingredients .ingredients-group ul li'))
                                .map(function (li) {
                                var spans = li.querySelectorAll('span');
                                return Array.from(spans)
                                    .slice(0, 2) // Tar bara de två första mått och enhet
                                    .map(function (span) { return span.innerText.trim(); })
                                    .join(' '); // Slår ihop texten till en sträng
                            })
                                .filter(function (text) { return text.length > 0; }); // Tar bort eventuella tomma strängar
                        })];
                case 7:
                    amounts = _a.sent();
                    return [4 /*yield*/, browser.close()];
                case 8:
                    _a.sent();
                    r = new Recipe(title !== null && title !== void 0 ? title : 'Okänd titel', 2, ingredients, amounts);
                    console.log(r);
                    return [2 /*return*/, r];
            }
        });
    });
}
// Kör funktionen
skapa_recept_url('https://undertian.com/recept/kramig-belugapastasas-med-paprika/');
