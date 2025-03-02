import { JSDOM } from 'jsdom';

import * as readline from 'readline';
const { document } = new JSDOM(`<!DOCTYPE html><p>Hello</p>`).window;

class Recipe {
    title: string;
    port: number; //antal portioner
    ingred: Array<string>
    amounts: Array<string>
    constructor(title: string, port: number, ingred: Array<string>, amounts: Array<string> = []) {
        this.title = title;
        this.port = port;
        this.ingred = ingred;
        this.amounts = amounts;
    }
}

//VARIABLES

const r1 = new Recipe("Köttbullar", 2, ["färs", "mjölk", "ströbröd", "gul lök", "ägg", "salt", "peppar"],["500g", "1,5 dl", "5 msk", "1/2", "1", "1 tsk", "1 krm" ]);
const r2 = new Recipe("Havregrynsgröt", 3,["havregryn", "vatten", "salt"],["1 dl", "2,5 dl", "0,5 krm"]);
const r3 = new Recipe("Pelmeni", 4,["vetemjöl", "ägg", "salt", "färs", "gul lök", "salt", "peppar"],["300g", "3", "1/2 tsk", "300g", "1", "1 krm", "1 krm"]);
const r4 = new Recipe("Omelett", 4, ["ägg", "mjölk", "salt", "peppar", "smör eller margarin"],["6", "1 dl", "1/2 tsk", "1 krm", "2 msk"]);
const r5 = new Recipe("Lasagne", 4, ["gul lök", "vitlöksklyftor", "nötfärs", "olja", "tomatpuré", "torkad timjan", "torkad rosmarin", "krossade tomater", "köttbuljongtärning", "salt", "peppar", "torkade lasagneplattor","smör", "vetemjöl", "mjölk"],["2", "2", "500 g", "1 msk", "4 msk","1 tsk", "1 tsk", "390 g", "1", "1 krm", "1 krm", "9", "6 msk", "6 msk", "10 dl"]);
const r6 = new Recipe("Havresoppa", 2,["havregryn", "vatten", "salt", "brosk"],["1 dl", "2,5 dl", "0,5 krm", "3 kg"]);
const allRecipes = [r1, r2, r3, r4, r5, r6];
const ammountOfRecipes = 6;






var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



document.addEventListener('keydown', (event: KeyboardEvent) => { //Om vi vill använda 
    if (event.key === '') {
      console.log('Escape key was pressed!');
    }
  });

  async function askQuestion(query: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            resolve(answer.trim()); // Trim spaces for cleaner input
        });
    });
}

async function add_ingredient() {
    let ingredients: string[] = [];
    let userInput;
    console.clear();
    console.log("Skriv ner dina ingredienser en efter en. När du är klar, skriv 'klar'.");

    while (true) {
        userInput = await askQuestion(": ");
        
        if (userInput.toLowerCase() === "klar") {
            break;
        }
        
        ingredients.push(userInput);
        console.clear();
        console.log("Nuvarande ingredienser:", ingredients.join(", "));
    }

    console.log("Dina ingredienser är:", ingredients.join(", "));
    rl.close();
    if(userInput != null){
        searchFunction(ingredients, allRecipes);
    }
}

function searchFunction(ings, allRecipes){
    let result: [string, number, number][] = []; //titel, mängd korrekta ingredienser, totalt ingredienser i receptet 
    for(let i = 0; i < ammountOfRecipes; i = i + 1){
        const countSame = ings.filter(val => allRecipes[i].ingred.includes(val)).length;
        if(countSame >= allRecipes[i].ingred.length - 3){ //Saknas fler än 3 ingredienser behöver receptet inte vara med
            const tempArray: [string, number, number] = [allRecipes[i].title, countSame, allRecipes[i].ingred.length];
            result.push(tempArray);
        }
    }
    result = result.sort((a, b) => b[1] - a[1]); //Sortera
    const formattedResult = result.map(([title, count, deniminator]) => [title, `${count}/${deniminator}`]);
    console.log(formattedResult);
    
}




async function main(){
    console.clear();
    console.log("Välkommen till fylla tanken-banken!");
    console.log("Alterantiv\n 1. Sök recept.\n");

    let userInput;
    while(true){
        userInput = await askQuestion(":");
        if(userInput === "1"){
            break;
        }
        console.log("Felaktig input\n");
    }
    add_ingredient();
    
}

main();

