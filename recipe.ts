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


const r821 = new Recipe(
    "Broccolipasta",
    2, 
    ["solroskärnor","havredryck","broccoli, fryst eller färsk","vitlöksklyftor","ost, riven","Olja att steka i","Salt & svartpeppar","pasta"],
    ["2 dl","3 dl","500 g","2 st","1 dl"," "," ","4 port"]
);



const r771 = new Recipe(
    "Palak paneer med tomat och halloumi",
    2, 
    ["port ris eller havreris","gul lök eller schalottenlök","vitlöksklyftor","tomater","riven ingefära","olivolja","tomatpuré","garam masala","krossade tomater","vatten","vispgrädde","grönsaksbuljongtärning","färsk spenat","halloumi eller grillost","salt"],
    ["4","1","2","2","2 msk","3 msk","2 msk","1 msk","390 g","1 dl","2 dl","1","200 g","400 g","2 krm"]
);



const r467 = new Recipe(
    "Busenkel broccolisoppa",
    2, 
    ["lök","potatisar (ca 300 g)","broccoli","grönsaksbuljong (vatten och grönsaksfond eller tärningar)","matlagningsgrädde","salt","peppar","bröd","kräftstjärtar eller räkor"],
    ["1","3 - 4","250 g","9 dl","2 1/2 dl","","","",""]
);



const r162 = new Recipe(
    "Våfflor grundrecept",
    2, 
    ["smör eller margarin","vetemjöl","bakpulver","salt","ägg","mjölk"],
    ["100 g","5 dl","1 1/2 tsk","1/2 tsk","2","5 dl"]
);



const r488 = new Recipe(
    "Chili con carne",
    2, 
    ["gula lökar","nötfärs (gärna ICAs nötfärs 12%)","olja","vitlöksklyftor","chilipulver (färsk eller torkad efter smak)","paprikapulver","svartpeppar","salt","japansk soja","burk hela tomater (à 400 g)","köttbuljongtärning","burkar vita bönor i tomatsås (à 440 g)","salladskål","hackad persilja","vinägrett","jalapeñopeppar","chips eller brytbröd"],
    ["2","350 g","1 msk","2","1 tsk","1 tsk","1 krm","3/4 tsk","1 msk","1","1","2","","","","",""]
);



const r455 = new Recipe(
    "Billig linsbolognese",
    2, 
    ["gula lökar","vitlöksklyftor","morötter (à ca 100 g)","matolja","tomatpuré","torkad rosmarin eller timjan","förp krossade tomater (à ca 500 g)","grönsaksbuljongtärningar","japansk soja","vatten","förp kokta linser (à ca 500 g)","salt","svartpeppar","port pasta (gärna penne)"],
    ["3","3","3","4 msk","1 dl","1 msk","3","4","3 msk","6 dl","3","","","10"]
);


const r408 = new Recipe(
    "Ugnsbakad aubergine med chermoula",
    2, 
    ["stora auberginer (à ca 400 g)","salt","olivolja","vitlöksklyfta","kruka koriander","malen spiskummin","milt paprikapulver","finrivet citronskal","salt","svartpeppar","olivolja"],
    ["3","1/2 tsk","1/2 dl","1","1","1/2 tsk","1 tsk","1 msk","1/2 tsk","2 krm","1 dl"]
);


const r425 = new Recipe(
    "Vårrullar med jordnötsdipp",
    2, 
    ["port ris (gärna fullkorn)","vatten","jordnötssmör","sweet chilisås","japansk soja","tofu","morötter","avokador","påse salladslök (à 125 g)","färska böngroddar","färsk koriander","ark rispapper","sesamfrön"],
    ["4","1 dl","1/2 dl","1/2 dl","3 msk","230 g","2","2","1/2","180 g","20 g","12","1 msk"]
);


const r600 = new Recipe(
    "Enkel vegansk tacopaj",
    2, 
    ["kylskåpskallt mjölkfritt margarin","vetemjöl","iskallt vatten","gula lökar","vitlöksklyftor","olja (till stekning)","sojafärs","mald spiskummin","mald koriander","växtbaserad crème fraiche med paprika och chili","röd paprika","majskorn","salt","svartpeppar","ask cocktailtomater (à 250 g)"],
    ["125 g","3 dl","3 msk","2","2","","500 g","1 msk","1 tsk","4 dl","1","2 dl","","","1"]
);


const r155 = new Recipe(
    "Lövbiff teriyaki med pak choi och lime",
    2, 
    ["port ris (gärna jasmin) eller äggnudlar","japansk soja","vatten","honung eller strösocker","riven färsk ingefära","vitlöksklyfta","majsstärkelse","sambal oelek","lime","olja","salt","förp stjälkselleri (à 450 g)","pak choi","lövbiff","olja","sesamfrön"],
    ["4","1 dl","1/2 dl","1/2 dl","1 msk","1","1 tsk","2 tsk","1","1 msk","","1/2","250 g","ca 500 g","1 msk","1 msk"]
);


const r123 = new Recipe(
    "Svampbuljong med dumplings",
    2, 
    ["gul lök","shiitakesvamp","finriven ingefära","olja","vatten","misopasta","japansk soja","färska vegetariska dumplings","finskurna salladslökar","mortlade, rostade sesamfrön"],
    ["1","150 g","1 msk","2 msk","10 dl","2 msk","2 msk","ca 500 g","3","2 msk"]
);


const r528 = new Recipe(
    "Spansk tortilla",
    2, 
    ["fast potatis","liten gul lök","ägg","olivolja","salt","svartpeppar"],
    ["600 g","1","4 - 5","1 dl","1 tsk","2 krm"]
);


const r349 = new Recipe(
    "Grillspett med kål, salladslök och grön curry",
    2, 
    ["salladskålshuvud (1/2 salladskål motsvarar ca 250 g)","salladslök (à 125 g)","koriander","grön currypaste","olivolja","vatten","salta jordnötter","grillspett","lime (till servering)"],
    ["1/2","1 förp","1/2 kruka","1 msk","1 msk","1/2 msk","3 msk","","1/2 - 1"]
);


const r108 = new Recipe(
    "Asiatisk kycklingfärssås med vitlök och ingefära",
    2, 
    ["gul lök","vitlöksklyftor","morötter","kycklingfärs","olja","skalad riven ingefära","tomatpuré","vatten","hönsbuljongtärning","kokosmjölk","röd spansk peppar","ketjap manis (söt soya)","salt","peppar","risnudlar eller äggnudlar"],
    ["1","2","2","500 g","1 msk","2 msk","3 msk","1 dl","1","400 ml","1","3 msk","","",""]
);


const r801 = new Recipe(
    "Morotssoppa med apelsin och basilika",
    2, 
    ["gul lök","vitlöksklyftor","morötter (à ca 100 g)","medelstor potatis (à ca 80 g)","olivolja","apelsiner (3 apelsiner motsvarar ca 2 1/2 dl juice)","grönsaksbuljong (vatten och buljongtärningar eller fond)","kruka basilika","salt","svartpeppar","citron","bröd"],
    ["1","2","4","1","1 msk","3","10 dl","1","","","1/2",""]
);


const r199 = new Recipe(
    "Vegansk lasagne",
    2, 
    ["gula lökar","vitlöksklyftor","olivolja","torkad timjan","torkad oregano","fryst sojafärs","tomatpuré","förp pastasås tomat och basilika (à 390 g)","grönsaksbuljongtärningar","vatten","förp kokta gröna linser (à ca 400 g)","salt","svartpeppar","havredryck","vegansk färskost","majsstärkelse","salt","svartpeppar","riven vegansk ost","lasagneplattor (utan ägg)","sallad"],
    ["2","2","2 msk","2 tsk","2 tsk","300 g","3 msk","2","2","4 dl","1","","","8 dl","200 g","5 msk","1 tsk","2 krm","4 dl","12",""]
);
