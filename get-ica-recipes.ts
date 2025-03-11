import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';
import { Recipe } from './recipe'; // Importera Recipe-klassen från recipe.ts

/**
 * Retrieves a recipe from a given URL on ica.se and returns it as a Recipe object.
 * @example
 * create_recipe_url('https://www.ica.se/recept/havregrynsgrot-730321/')
 * // results in:
 * // Recipe {
 * //   title: 'Havregrynsgröt',
 * //   port: 1,
 * //   ingred: ['havregryn', 'vatten', 'salt', 'mjölk',
 * // 'lingonsylt eller äppelmos', 'rårivna eller hackade äpplen', 'honung'],
 * //   amounts: ['1 dl', '2 1/2 dl', '1/2 krm', '', '', '', '']
 * // }
 * @param {string} url - link to a recipe on ica.se
 * @returns {Promise<Recipe>} - a promise that resolves to a Recipe object
 */
export default async function create_recipe_url(url: string): Promise<Recipe> {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });

    // Hämta titel
    const title: string | null = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        return h1 ? h1.innerText.trim() : null;
    });

    // Vänta på att ingredienslistan laddas in
    await page.waitForSelector('#ingredients');

    // Hämta portioner
    const port: number | null = await page.evaluate(() => {
        try {
            let portElement =
                document.querySelector(".ingredients-change-portions div")
                || document.querySelector(".default-portions");
            if (!portElement) return null; // Om portioner inte finns

            // Ta bort allt utom siffror
            const portText = portElement.textContent?.trim().replace(/\D/g, "");

            //Parse och få ut siffran, returnera null om det inte finns någon siffra
            return portText ? parseInt(portText, 10) : null;

        } catch (error) {
            return null;
        }
    });

    // Hämta mängderna
    const amounts: Array<string> = await page.evaluate(() => {
        return Array.from(document.querySelectorAll(
            '#ingredients .ingredients-list-group__card'))
            .map(ing => {
                const qty = ing.querySelector('.ingredients-list-group__card__qty');
                return qty ? qty.textContent?.trim() ?? "" : "";
            });
    });

    // Hämta ingredienserna
    const ingredients: Array<string> = await page.evaluate(() => {
        return Array.from(document.querySelectorAll(
            '#ingredients .ingredients-list-group__card'))
            .map(ing => {
                const qty = ing.querySelector(
                    '.ingredients-list-group__card__qty');
                let ingredientText = ing.textContent?.trim() ?? "";

                if (qty) {
                    ingredientText = ingredientText.replace(
                        qty.textContent ?? "", '').trim();
                }
                return ingredientText || "";
            });
    });

    await browser.close();

    // Skapa och returnera Recipe-objektet
    const r = new Recipe(title ?? "Okänt recept", port, ingredients, amounts);
    return r;
}

/**
 * Retrieves a recipe from a given URL on ica.se and saves it to a file
 * in TypeScript format.
 * @example
 * save_recipe('https://www.ica.se/recept/havregrynsgrot-730321/')
 * // Creates a new Recipe instance in TypeScript format in recipe.ts
 * // with the following content:
 * // const r123 = new Recipe(
 * //    "Havregrynsgröt",
 * //    1,
 * //    ["havregryn", "vatten", "salt", "mjölk", "lingonsylt eller äppelmos",
 * //    "rårivna eller hackade äpplen", "honung"],
 * //    ["1 dl", "2 1/2 dl", "1/2 krm", "", "", "", ""]
 * // );
 *
 * @param {string} url - A valid URL to a recipe on ica.se
 * @precondition URL must point to a recipe on ica.se/recept
 * @returns {Promise<void>} Returns nothing, but writes to a file
 */

async function save_recipe(url: string): Promise<void> {
    const recipe = await create_recipe_url(url);
    if (!recipe) {
        console.error('Misslyckades att hämta receptet.');
        return;
    }

    // Skapa en Recipe-instans i TypeScript-format för att lägga till i filen
    const recipeContent = `

const r${Date.now()} = new Recipe(
    ${JSON.stringify(recipe.title)},
    ${recipe.port},
    ${JSON.stringify(recipe.ingred)},
    ${JSON.stringify(recipe.amounts)}
);`;

    // Lägg till receptet i filen utan att skriva över tidigare data
    await fs.appendFile('recipe.ts', recipeContent, 'utf8');
    console.log('Receptet har lagts till i recipe.ts!');
}

// Exempelanrop
const url = "https://www.ica.se/recept/havregrynsgrot-730321/";
//create_recipe_url(url);

// save_recipe("https://www.ica.se/recept/kramig-carbonara-722780/");
// save_recipe("https://www.ica.se/recept/bagel-med-lax-pepparrotskram-och-gurka-730245/");
// save_recipe("https://www.ica.se/recept/halloumigryta-med-ris-725482/");
// save_recipe("https://www.ica.se/recept/fajitasplat-730298/");
// save_recipe("https://www.ica.se/recept/laxlasagne-med-fetaost-714147/");
