import { JSDOM } from 'jsdom';
import * as readline from 'readline';
const { document } = new JSDOM(`<!DOCTYPE html><p>Hello</p>`).window;

class Recipe {
    constructor(
        public title: string, 
        public ingred: string[], 
        public amounts: string[],
        public time: number

    ) {}
}

//const prompt = PromptSync();

const r1 = new Recipe('Pancakes', ['Flour', 'Eggs', 'Milk'], ["2DL", "3", "5DL"], 15);


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
        searchFunction(ingredients);
    }
}

function searchFunction(ings){
    
}




function main(){
    console.clear();
    console.log("Välkommen till fylla tanken-banken!");
    console.log("Alterantiv\n 1. Sök recept.");
    add_ingredient();
    //console.log(r1);
}

main();

