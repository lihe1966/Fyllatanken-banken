import puppeteer from 'puppeteer';
import fs from 'fs';
import { randomInt } from 'crypto';

class Recipe {
    constructor(title, port = null, ingred, amounts = []) {
        this.title = title;
        this.port = port; // Antal portioner
        this.ingred = ingred;
        this.amounts = amounts;
    }
}

/**
* Hämtar recept från ica.se/recept och lagrar som class Recipe
* @example
* skapa_Recept_url('https://www.ica.se/recept/havregrynsgrot-730321/')
* //results in:
* //Recipe {
* //   title: 'Havregrynsgröt',
* //   port: 1,
* //  ingred: [
* //    'havregryn','vatten','salt','mjölk', 'lingonsylt eller äppelmos',
* //    'rårivna eller hackade äpplen', 'honung'],
* //  amounts: [ '1 dl', '2 1/2 dl', '1/2 krm', '', '', '', '' ]
}
* @param {string} url - recipe from ica.se/recept
* @precondition valid recipe-link specificallly from ica.se/recept
* @returns {Promise<Recipe>} Ett promise av objektet Recipe
 */

export async function skapa_recept_url(url) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });

    //Hämta titel
    const title = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        return h1 ? h1.innerText.trim() : null;
    });


    // Vänta på att ingredienslistan laddas in
    await page.waitForSelector('#ingredients');

    //Hämta portioner
    const port = await page.evaluate(() => {
        try {
            // Försök hitta portioner med den första selektorn
            let portElement = document.querySelector(".ingredients-change-portions div");

            // Om det inte hittas, försök med den alternativa selektorn
            if (!portElement) {
                portElement = document.querySelector(".default-portions");
            }

            // Om fortfarande inget hittades, returnera null
            if (!portElement) return null;

            // Hämta texten och extrahera siffrorna
            const portText = portElement.textContent.trim().replace(/\D/g, ""); // Tar bort allt utom siffror
            return parseInt(portText, 10) || null;
        } catch (error) {
            return null; // Hanterar eventuella fel
        }
    });


    // Hämta mängderna
    const amounts = await page.evaluate(() => {
        return Array.from(document.querySelectorAll(
            '#ingredients .ingredients-list-group__card')).map(ing => {
                // Hämta bara innehållet i <span class="ingredients-list-group__card__qty">
                const qty = ing.querySelector('.ingredients-list-group__card__qty');

                // Om qty-elementet inte finns, returnera en tom sträng för att matcha antal element
                if (!qty) {
                    return "";
                }
                // Annars, returnera innehållet av qty
                return qty.innerText.trim();
            });

    });

    //Hämta ingredienserna
    const ingredients = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('#ingredients .ingredients-list-group__card'))
            .map(ing => {
                // Hämta texten som kommer efter <span class="ingredients-list-group__card__qty">
                const qty = ing.querySelector('.ingredients-list-group__card__qty');

                // Ta bort kvantiteten (om den finns) och extrahera resten av texten
                let ingredientText = ing.innerText.trim();

                // Om qty finns, ta bort det från ingredientText
                if (qty) {
                    ingredientText = ingredientText.replace(qty.innerText, '').trim();  // Ta bort kvantiteten och trimma bort överflödiga mellanslag
                }

                // Returnera den extraherade ingrediensen (t.ex. "smör")
                return ingredientText || "";  // Om ingen text finns, returnera en tom sträng
            });
    });

    await browser.close();
    const r = new Recipe(title, port, ingredients, amounts);
    console.log(r);
    return r;
}

/**Function specification */
async function save_recipe(url) {
    const recipe = await skapa_recept_url(url);
    if (!recipe) {
        console.error('Misslyckades att hämta receptet.');
        return;
    }

    // Skapa en Recipe-instans i korrekt format
    const recipeContent = `
const r${randomInt(1, 1000)} = new Recipe(
    ${JSON.stringify(recipe.title)},
    ${recipe.port},
    ${JSON.stringify(recipe.ingred)},
    ${JSON.stringify(recipe.amounts)}
);`;
    // Lägg till receptet i filen utan att skriva över tidigare data
    fs.appendFileSync('recipe.ts', recipeContent, 'utf8');
    console.log('Receptet har lagts till i recipe.ts!');
}



// Exempelanrop
const url = "https://www.ica.se/recept/havregrynsgrot-730321/"
skapa_recept_url(url)
//console.log(r);

//save_recipe('https://www.ica.se/recept/blomkal-och-svampbolognese-730053/')