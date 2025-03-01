//const puppeteer = require('puppeteer');
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




export async function skapa_recept_url(url) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: 'networkidle2' });

    const title = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        return h1 ? h1.innerText.trim() : null;
    });
    
    console.log('Titel:', title);
    

    // Vänta på att ingredienslistan laddas in
    await page.waitForSelector('#ingredients');

    // Extrahera ingredienserna
    const amounts = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('#ingredients .ingredients-list-group__card'))
        .map(ing => {
            // Hämta bara innehållet i <span class="ingredients-list-group__card__qty">
            const qty = ing.querySelector('.ingredients-list-group__card__qty');

            // Om qty-elementet inte finns, returnera en tom sträng
            if (!qty) {
                return "";
            }

            // Annars, returnera innehållet av qty (ex. "100 g")
            return qty.innerText.trim();
        });
            
    });
    console.log(amounts);
    
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
            
console.log(ingredients);
    
    await browser.close();
    const r = new Recipe(title, 2, ingredients, amounts );

    return  r; 
}


// Kör funktionen
//skapa_recept_url('https://undertian.com/recept/kramig-belugapastasas-med-paprika/');



//recept från url
// const r3 = skapa_recept_url("https://undertian.com/recept/graartsbolognese/");
// const r4 = skapa_recept_url("https://undertian.com/recept/pad-thai-cheap-style/");
// const r5 = skapa_recept_url("https://undertian.com/recept/tomatsoppa-med-ort-tomat-och-fetabrod-2/");
// const r6 = skapa_recept_url("https://undertian.com/recept/gazpacho-med-bonbrod/");
// const r7 = skapa_recept_url("https://undertian.com/recept/snabb-pasta-med-soltorkade-tomater-tahini-och-vita-bonor/");
// const r8 = skapa_recept_url("https://undertian.com/recept/kramig-kalsas/");

//console.log(r7);





async function save_recipe(url) {
    const recipe = await skapa_recept_url(url);

    if (!recipe) {
        console.error('Misslyckades att hämta receptet.');
        return;
    }

    // Skapa en Recipe-instans i korrekt format
    const recipeContent = `

const r${randomInt(1,1000)} = new Recipe(
    ${JSON.stringify(recipe.title)},
    2, 
    ${JSON.stringify(recipe.ingred)},
    ${JSON.stringify(recipe.amounts)}
);

`;

    // Lägg till receptet i filen utan att skriva över tidigare data
    fs.appendFileSync('recipe.ts', recipeContent, 'utf8');
    console.log('Receptet har lagts till i recipe.ts!');
}



// Exempel på anrop
//const url = 'https://undertian.com/recept/graartsbolognese/';
const url = 'https://undertian.com/recept/graartsbolognese/';
//save_recipe("https://undertian.com/recept/tomatsoppa-med-ort-tomat-och-fetabrod-2/");
save_recipe("https://www.ica.se/recept/capricciosa-730268/");