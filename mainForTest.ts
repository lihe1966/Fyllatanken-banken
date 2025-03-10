

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







export function searchByIngred(ings: Array<string>, allRecipes: Array<Recipe>){
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
    return formattedResult;
    
}

export function searchByName(userInput: string, allRecipes: Array<Recipe>){
    let found: boolean = false;
    if(userInput === "klar"){
        found = true;
        main();
    }
    
    for(let i = 0; i < allRecipes.length - 1; i = i + 1){
        if(userInput.toLowerCase() === allRecipes[i].title.toLowerCase()){
            printRecipe(allRecipes[i]); 
            found = true; 
            return found;
        }
    }
    if(!found){
        found = false;
        return found;
    }
    
}

export function printRecipe(recipe: Recipe){
    console.clear();
    console.log("Namn: " + recipe.title);
    console.log("Antal portioner: " + recipe.port);
    console.log("Ingredienser: " + recipe.ingred);
    console.log("Mängder per ingrediens: " + recipe.amounts + "\n");
}

async function main(){
    console.clear();
    console.log("Välkommen till fylla tanken-banken!");
    console.log("Alterantiv\n 1. Sök recept efter ingredienser.\n 2. Sök recept.\n");

    //searchByIngred(["färs", "salt", "peppar", "ströbröd", "gul lök", "ägg"], allRecipes); test
 
    
}
