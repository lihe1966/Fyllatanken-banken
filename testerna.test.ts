
import skapa_recept_url from "./get-ica-recipes";
import { Recipe } from "./recipe";
import { printRecipe, searchByIngred , searchByName} from "./mainForTest";

describe("skapa_recept_url", () => {
test("Testar att skapa ett skapa_recept_url", async () => {
    const url = "https://www.ica.se/recept/kladdig-kladdkaka-722982/";
    const recipe = await skapa_recept_url(url);
    expect(recipe.title).toBe("Kladdig kladdkaka");
    expect(recipe.port).toBe(8);
    expect(recipe.ingred).toEqual(["smör till formen", "ströbröd till formen",
         "smör", "ägg", "strösocker", "kakao", "vaniljsocker", "vetemjöl",
         "salt", "florsocker till garnering","vispgrädde","färska bär", ]);
    expect(recipe.amounts).toEqual(["", "", "100 g", "2 st", "2 1/2 dl", "3 msk", "2 tsk", "1 1/2 dl", "1 krm", "", "2 dl", ""]);
});

test("Index av ingrediens och mängd korresponderar", async () => {
    const url = "https://www.ica.se/recept/klassiska-semlor-292482/";
    const recipe = await skapa_recept_url(url);
    expect(recipe.ingred[4]).toBe("ägg");
    expect(recipe.amounts[4]).toBe("1");
});

test("Skapar en tom sträng för en ingrediens utan mått", async () => {
    const url = "https://www.ica.se/recept/kramig-kycklinggryta-med-soltorkade-tomater-723346/";
    const recipe = await skapa_recept_url(url);
    expect(recipe.amounts[3]).toBe("");
});
});


describe("printRecipe", () => {
  test("should print the correct recipe details", () => {
    // Create a mock recipe
    const recipe = new Recipe(
      "Pasta",
      2,
      ["pasta", "tomato", "cheese"],
      ["200g", "2", "50g"]
    );

    // Spy on console.log
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    // Call the function
    printRecipe(recipe);

    // Check if console.log was called with the correct values
    expect(consoleSpy).toHaveBeenCalledWith("Namn: Pasta");
    expect(consoleSpy).toHaveBeenCalledWith("Antal portioner: 2");
    expect(consoleSpy).toHaveBeenCalledWith("Ingredienser: pasta,tomato,cheese");
    expect(consoleSpy).toHaveBeenCalledWith("Mängder per ingrediens: 200g,2,50g\n");

    // Restore console.log after the test
    consoleSpy.mockRestore();
  });
});

describe("searchByIngred", () => {
  test("should return matching recipes sorted by relevance", () => {
    const allRecipes = [
      new Recipe("Pasta", 2, ["pasta", "tomato", "cheese"], ["200g", "2", "50g"]),
      new Recipe("Burger", 1, ["bun", "meat", "cheese"], ["1", "150g", "20g"]),
      new Recipe("Salad", 1, ["lettuce", "tomato", "cucumber"], ["50g", "1", "1"])
    ];

    const result = searchByIngred(["tomato", "cheese"], allRecipes);

    expect(result.length).toBe(2); // Should return Pasta and Burger
    expect(result[0][0]).toBe("Pasta"); // Pasta has more matching ingredients
    expect(result[1][0]).toBe("Burger");
  });

  test("should return an empty array if no matches", () => {
    const allRecipes = [
      new Recipe("Pasta", 2, ["pasta", "tomato", "cheese", "salt"], ["200g", "2", "50g", "10g"]),
      new Recipe("Burger", 1, ["bun", "meat", "cheese", "salt"], ["1", "150g", "20g", "10g"])
    ];

    const result = searchByIngred(["banana"], allRecipes);

    expect(result.length).toBe(0);
  });
});


describe("searchByName", () => {
  test("should return matching recipe with matching name", () => {
    const allRecipes = [
      new Recipe("Pasta", 2, ["pasta", "tomato", "cheese"], ["200g", "2", "50g"]),
      new Recipe("Burger", 1, ["bun", "meat", "cheese"], ["1", "150g", "20g"]),
      new Recipe("Salad", 1, ["lettuce", "tomato", "cucumber"], ["50g", "1", "1"])
    ];

    const result = searchByName("Burger", allRecipes);

    expect(result).toBe(true); 
  });

  test("should return an empty array if no matches", () => {
    const allRecipes = [
      new Recipe("Pasta", 2, ["pasta", "tomato", "cheese", "salt"], ["200g", "2", "50g"]),
      new Recipe("Burger", 1, ["bun", "meat", "cheese", "salt"], ["1", "150g", "20g"])
    ];

    const result = searchByName("Bananasplit", allRecipes);

    expect(result).toBe(false);
  });
});