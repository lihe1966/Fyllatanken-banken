import puppeteer from 'puppeteer';
import * as fs from 'fs';
import { randomInt } from 'crypto';

class Recipe {
    title: string;
    port: number | null;
    ingred:Array<string>;
    amounts: Array<string>;

    constructor(title: string, port: number | null = null, ingred: string[], amounts: string[] = []) {
        this.title = title;
        this.port = port;
        this.ingred = ingred;
        this.amounts = amounts;
    }
}

export async function skapa_recept_url(url: string): Promise<Recipe | null> {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: 'networkidle2' });

    const title = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        return h1 ? h1.innerText.trim() : null;
    });

    console.log('Titel:', title);

    if (!title) {
        await browser.close();
        return null;
    }

    // Vänta på att ingredienslistan laddas in
    await page.waitForSelector('.ingredients .ingredients-group ul');

    // Extrahera ingredienserna
    const ingredients: string[] = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.ingredients .ingredients-group ul li span:nth-child(3)'))
            .map(li => li.textContent?.trim() || '');
    });

    const amounts: string[] = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.ingredients .ingredients-group ul li'))
            .map(li => {
                const spans = li.querySelectorAll('span');
                return Array.from(spans)
                    .slice(0, 2) // Tar bara de två första mått och enhet
                    .map(span => span.textContent?.trim() || '')
                    .join(' '); // Slår ihop texten till en sträng
            })
            .filter(text => text.length > 0); // Tar bort eventuella tomma strängar
    });

    await browser.close();
    return new Recipe(title, 2, ingredients, amounts);
}

async function save_recipe(url: string): Promise<void> {
    const recipe = await skapa_recept_url(url);

    if (!recipe) {
        console.error('Misslyckades att hämta receptet.');
        return;
    }

    // Skapa en Recipe-instans i korrekt format
    const recipeContent = `

const r${randomInt(1, 1000)} = new Recipe(
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
save_recipe("https://undertian.com/recept/broccolipasta/");
