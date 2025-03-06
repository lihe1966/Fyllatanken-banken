import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';


export class Recipe {
    title: string ;
    port: number | null;
    ingred: Array<string>;
    amounts: Array<string>;

    constructor(title: string, port: number | null = null, ingred: Array<string>, amounts: Array<string> = []) {
        this.title = title;
        this.port = port;
        this.ingred = ingred;
        this.amounts = amounts;
    }
}

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
export default async function skapa_recept_url(url: string): Promise<Recipe> {
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
            let portElement = document.querySelector(".ingredients-change-portions div") ||
                              document.querySelector(".default-portions");

            if (!portElement) return null;

            const portText = portElement.textContent?.trim().replace(/\D/g, ""); // Tar bort allt utom siffror
            return portText ? parseInt(portText, 10) : null;
        } catch (error) {
            return null;
        }
    });

    // Hämta mängderna
    const amounts: string[] = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('#ingredients .ingredients-list-group__card'))
            .map(ing => {
                const qty = ing.querySelector('.ingredients-list-group__card__qty');
                return qty ? qty.textContent?.trim() ?? "" : "";
            });
    });

    // Hämta ingredienserna
    const ingredients: string[] = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('#ingredients .ingredients-list-group__card'))
            .map(ing => {
                const qty = ing.querySelector('.ingredients-list-group__card__qty');
                let ingredientText = ing.textContent?.trim() ?? "";

                if (qty) {
                    ingredientText = ingredientText.replace(qty.textContent ?? "", '').trim();
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

async function save_recipe(url: string): Promise<void> {
    const recipe = await skapa_recept_url(url);
    if (!recipe) {
        console.error('Misslyckades att hämta receptet.');
        return;
    }

    // Skapa en Recipe-instans i korrekt format
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
//skapa_recept_url(url);

//save_recipe(url);
