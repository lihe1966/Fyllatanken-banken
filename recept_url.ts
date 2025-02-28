
//import { Recipe } from './recipes';
const puppeteer = require('puppeteer');

export class Recipe {
    title: string;
    port: number | null; 
    ingred: Array<string>;
    amounts: Array<string>;

    constructor(title: string, port: number | null = null, ingred: Array<string>, amounts: Array<string> = []) {
        this.title = title;
        this.port = port
        this.ingred = ingred;
        this.amounts = amounts;
    }
}

const url: string = 'https://undertian.com/recept/graartsbolognese/';

export async function skapa_recept_url(url: string): Promise<Recipe> {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: 'networkidle2' });

    const title: string | null = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        return h1 ? h1.innerText.trim() : null;
    });
    
    console.log('Titel:', title);
    
    // Vänta på att ingredienslistan laddas in
    await page.waitForSelector('.ingredients .ingredients-group ul');

    // Extrahera ingredienserna
    const ingredients: string[] = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.ingredients .ingredients-group ul li span:nth-child(3)'))
            .map(li => li.innerText.trim());
    });

    const amounts: string[] = await page.evaluate(() => {
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
    const r = new Recipe(title ?? 'Okänd titel', 2, ingredients, amounts);
    console.log(r);

    return r; 
}

// Kör funktionen
skapa_recept_url('https://undertian.com/recept/kramig-belugapastasas-med-paprika/');
