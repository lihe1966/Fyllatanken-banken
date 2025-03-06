
import skapa_recept_url from "./test-icarecept"
import { Recipe } from "./test-icarecept"

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

//test("")