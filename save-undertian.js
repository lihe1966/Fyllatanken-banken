//const puppeteer = require('puppeteer');
import puppeteer from 'puppeteer';

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
    await page.waitForSelector('.ingredients .ingredients-group ul');

    // Extrahera ingredienserna
    const ingredients = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.ingredients .ingredients-group ul li span:nth-child(3)'))
            .map(li => li.innerText.trim())
            
    });

    const amounts = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.ingredients .ingredients-group ul li'))
            .map(li => {
                const spans = li.querySelectorAll('span');
                return Array.from(spans)
                    .slice(0, 2) // Tar bara de två första mått och enhet
                    .map(span => span.innerText.trim())
                    .join(' '); // Slår ihop texten till en sträng
            })
            .filter(text => text.length > 0); // Tar bort eventuella tomma strängar
    });
    

    
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


import fs from 'fs';
import { randomInt } from 'crypto';



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
save_recipe("https://undertian.com/recept/vegansk-bolognese-pa-sojafars/");
save_recipe("https://undertian.com/recept/gronkalssallad-med-belugalinser-och-kardemummadressing/");
save_recipe("https://undertian.com/recept/veganska-kottbullar-med-pasta-och-tomatsas/");
save_recipe("https://undertian.com/recept/billig-rotfruktssoppa/");
save_recipe("https://undertian.com/recept/tomatsoppa-med-ugnsrostade-blomkal/");
save_recipe("https://undertian.com/recept/lins-och-pumpabollar-med-ajvar-relish/");