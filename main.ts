

import * as readline from 'readline';
import {allRecipes} from './recept'; 


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







var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
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
    if(userInput != null){
        searchByIngred(ingredients, allRecipes);
    }
}




async function searchByIngred(ings: Array<string>, allRecipes: Array<Recipe>){
    let result: [string, number, number][] = []; //titel, mängd korrekta ingredienser, totalt ingredienser i receptet 
    for(let i = 0; i < allRecipes.length - 1; i = i + 1){
        const countSame = ings.filter(val => allRecipes[i].ingred.includes(val)).length;
        if(countSame >= allRecipes[i].ingred.length - 3){ //Saknas fler än 3 ingredienser behöver receptet inte vara med
            const tempArray: [string, number, number] = [allRecipes[i].title, countSame, allRecipes[i].ingred.length];
            result.push(tempArray);
        }
    }
    result = result.sort((a, b) => b[1] - a[1]); //Sortera
    const formattedResult = result.map(([title, count, deniminator]) => [title, `${count}/${deniminator}`]); //Formaterad
    console.log(formattedResult);
    console.log("\n\n");
    while(true){
        let userInput = await askQuestion("Vill du söka upp något specifikt recept? ")
        if(userInput === "ja" || userInput === "Ja"){
            searchByName();
            break;
        }
        if(userInput === "nej" || userInput === "Nej"){
            main()
            break;
        }
        else{
            console.log("Felaktig input");
        }
    }
}


async function searchByName(){
    let found: boolean = false;
    let userInput = await askQuestion("Skriv in en rätt, om du vill gå ur skriv 'klar': ");
    if(userInput === "klar"){
        found = true;
        main();
    }
    
    for(let i = 0; i < allRecipes.length - 1; i = i + 1){
        if(userInput.toLowerCase() === allRecipes[i].title.toLowerCase()){
            printRecipe(allRecipes[i]); 
            found = true; 
            break;
        }
    }
    if(!found){
        console.log("Receptet finns inte, testa igen")
        searchByName();
    }
    
}

async function printRecipe(recipe: Recipe){
    console.clear();
    console.log("Namn: " + recipe.title);
    console.log("Antal portioner: " + recipe.port);
    console.log("Ingredienser: " + recipe.ingred);
    console.log("Mängder per ingrediens: " + recipe.amounts + "\n");
    while(true){
        let userInput = await askQuestion("Skriv 'klar' för att fortsätta: ")
        if(userInput === "klar" || userInput === "Klar"){
            main();
            break;
        }
        else{
            console.log("Felaktig input");
        }
    }
}



async function main(){
    console.clear();
    console.log("Välkommen till fylla tanken-banken!");
    console.log("Alterantiv\n 1. Sök recept efter ingredienser.\n 2. Sök recept.\n");

    //searchByIngred(["färs", "salt", "peppar", "ströbröd", "gul lök", "ägg"], allRecipes); test
 
    let userInput;
    while(true){
        userInput = await askQuestion(":");
        if(userInput === "1"){
            add_ingredient();
            break;
        }
        if(userInput === "2"){
            searchByName();
            break;
        }
        console.log("Felaktig input\n");
    }
    
}

main();



