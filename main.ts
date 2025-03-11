import * as readline from 'readline';
import { Recipe } from './recipe';

// Hämta alla recept från Recipe.ts
export const allRecipes = Recipe.getInstances();


// Skapa en Readline interface
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export async function askQuestion(query: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            resolve(answer.trim()); // Trim spaces for cleaner input
        });
    });
}

/**
 * Collects a list of ingredients from user input and searches for
 * matching recipes.
 * @example
 * // User input sequence:
 * // "tomato"
 * // "cheese"
 * // "klar"
 * // Output:
 * // "Your ingredients are: tomato, cheese"
 * // Calls searchByIngred(["tomato", "cheese"], allRecipes)
 * @precondition The function must be executed in an environment that
 * @async
 * @returns {Promise<void>} A promise that resolves when ingredient input
 * is completed and recipe search is triggered.
 */
export async function add_ingredient() {
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
    if (userInput != null) {
        searchByIngred(ingredients, allRecipes);
    }
}

/**
 * Searches for recipes that match the given ingredients and sorts them by relevance.
 * @example
 * // Given input:
 * // ings = ["tomato", "cheese"]
 * // allRecipes = [{ title: "Pizza", ingred: ["tomato", "cheese", "dough"] }, ...]
 * // Output:
 * // [["Pizza", " Du har 2/3 ingredienser"], ...]
 * @async
 * @param {Array<string>} ings - List of ingredients provided by the user.
 * @param {Array<Recipe>} allRecipes - List of available recipes.
 * @precondition The function must be run in an environment that supports async/await.
 * @complexity O(n*m), where n is the number of recipes and m is the number of ingredients in a recipe.
 * @returns {Promise<void>} A promise that resolves after displaying matching recipes and handling user input.
 */
export async function searchByIngred(ings: Array<string>, allRecipes: Array<Recipe>) {
    let result: [string, number, number][] = []; //titel, mängd korrekta ingredienser, totalt ingredienser i receptet
    for (let i = 1; i < allRecipes.length; i = i + 1) {
        const countSame = ings.filter(val => allRecipes[i].ingred.includes(val)).length;
        if (countSame > 0) {
            const tempArray: [string, number, number] = [allRecipes[i].title, countSame, allRecipes[i].ingred.length];
            result.push(tempArray);
        }
    }
    result = result.sort((a, b) => b[1] - a[1]); //Sortera
    const formattedResult = result.map(([title, count, deniminator]) => [title, ` Du har ${count}/${deniminator} ingredienser`]); //Formaterad
    console.log(formattedResult);
    console.log("\n\n");
    while (true) {
        let userInput = await askQuestion("Vill du söka upp något specifikt recept? ")
        if (userInput === "ja" || userInput === "Ja") {
            searchByName();
            break;
        }
        if (userInput === "nej" || userInput === "Nej") {
            main()
            break;
        }
        else {
            console.log("Felaktig input");
        }
    }
}

/**
 * Searches for a recipe by name based on user input.
 * @example
 * // User input:
 * // "Pasta Carbonara"
 * // If the recipe exists in allRecipes, it is printed.
 * // If the user types "klar", they return to the main menu.
 * @async
*/
export async function searchByName() {
    let found: boolean = false;
    let userInput = await askQuestion("Skriv in en rätt, om du vill gå ur skriv 'klar': ");
    if (userInput === "klar") {
        found = true;
        main();
    }

    for (let i = 1; i < allRecipes.length; i = i + 1) {
        if (userInput.toLowerCase() === allRecipes[i].title.toLowerCase()) {
            printRecipe(allRecipes[i]);
            found = true;
            break;
        }
    }
    if (!found) {
        console.log("Receptet finns inte, testa igen")
        searchByName();
    }

}

/**
 * Displays the details of a given recipe and waits for user confirmation
 * to return to the main menu.
 * @example
 * // Given a Recipe object:
 * // { title: "Pasta Carbonara", port: 4, ingred: ["pasta", "bacon", "egg"],
 *  amounts: ["200g", "150g", "2st"] }
 * // Output:
 * // Namn: Pasta Carbonara
 * // Antal portioner: 4
 * // Ingredienser: pasta, bacon, egg
 * // Mängder per ingrediens: 200g, 150g, 2st
 * // User must type 'klar' to continue.
 * @async
 * @param {Recipe} recipe - The recipe object containing title, servings, ingredients, and amounts.
 * @precondition The function must be run in an environment that supports async/await.
 * @complexity O(1), as it only processes and displays a single recipe.
 * @returns {Promise<void>} A promise that resolves when the user confirms continuation.
 */
export async function printRecipe(recipe: Recipe) {
    console.clear();
    console.log("Namn: " + recipe.title);
    console.log("Antal portioner: " + recipe.port);
    console.log("Ingredienser: " + recipe.ingred);
    console.log("Mängder per ingrediens: " + recipe.amounts + "\n");
    while (true) {
        let userInput = await askQuestion("Skriv 'klar' för att fortsätta: ")
        if (userInput === "klar" || userInput === "Klar") {
            main();
            break;
        }
        else {
            console.log("Felaktig input");
        }
    }
}

/**
 * The main menu function that allows the user to search for recipes by ingredients or by name.
 * @example
 * // Output:
 * // "Välkommen till fylla tanken-banken!"
 * // "Alternativ"
 * // "1. Sök recept efter ingredienser."
 * // "2. Sök recept."
 * // User selects an option:
 * // - If "1", calls add_ingredient().
 * // - If "2", calls searchByName().
 * @async
 * @precondition The function must be run in an environment that supports async/await.
 * @returns {Promise<void>} A promise that resolves when the user selects an option.
 */
export async function main() {
    console.clear();
    console.log("Välkommen till fylla tanken-banken!");
    console.log("Alterantiv\n 1. Sök recept efter ingredienser.\n 2. Sök recept.\n");

    let userInput;
    while (true) {
        userInput = await askQuestion(":");
        if (userInput === "1") {
            add_ingredient();
            break;
        }
        if (userInput === "2") {
            searchByName(); //Söker utan inmatade ingredienser.
            break;
        }
        console.log("Felaktig input\n");
    }

}



main(); //Call main to start the program



