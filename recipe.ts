export class Recipe {
    title: string;
    port: number;
    ingred: string[];
    amounts: string[];
  
    constructor(title: string, port: number, ingred: string[], amounts: string[] = []) {
        this.title = title;
        this.port = port;
        this.ingred = ingred;
        this.amounts = amounts;
    }
  }
  
  
  
  
  
  const r653 = new Recipe(
      "Gråärtsbolognese",
      2, 
      ["torkade gråärtor","morötter","gula lökar","riven rotselleri (kan uteslutas)","tomatpuré","olja att steka i","japansk soja","krossade tomater","vatten","parmesanskalk (kan uteslutas)","socker","grönsaksbuljongtärning","sambal oelek","torkad oregano"],
      ["2 dl","3 st","2 st","1 dl","2 msk"," ","1 msk","2 frp","4 dl","1 st","1 tsk","1 st","1 tsk","1 msk"]
  );
  
  
  
  const r249 = new Recipe(
      "Gråärtsbolognese",
      2, 
      ["torkade gråärtor","morötter","gula lökar","riven rotselleri (kan uteslutas)","tomatpuré","olja att steka i","japansk soja","krossade tomater","vatten","parmesanskalk (kan uteslutas)","socker","grönsaksbuljongtärning","sambal oelek","torkad oregano"],
      ["2 dl","3 st","2 st","1 dl","2 msk"," ","1 msk","2 frp","4 dl","1 st","1 tsk","1 st","1 tsk","1 msk"]
  );
  
  
  
  const r427 = new Recipe(
      "Tomatsoppa med ört, -tomat och fetabröd",
      2, 
      ["vitlöksklyftor","röda linser, torkade","grönsaksbuljongtärning","oregano","basilika","sambal oelek","krossade tomater","vatten","Salt & svartpeppar","Olja att steka i","jäst","vatten, fingervarmt","salt","raps- eller olivolja","vetemjöl","soltorkade tomater","fetaost","oregano"],
      ["2 st","3 dl","1 st","1 msk","1 msk","1 krm","8 dl","4 dl"," "," ","0.25 pkt","2 dl","1 tsk","1 msk","6 dl","4 st","75 g","1 msk"]
  );
  
  
  
  const r873 = new Recipe(
      "Grönkålspaj med champinjoner, oliver och soltorkade tomater",
      2, 
      ["grahamsmjöl","vetemjöl","salt","rapsolja","växtbaserad mjölkdryck","gul lök","vitlöksklyftor","champinjoner","grönkål","oliver","hackade soltorkade tomater","riven ost","fetaost","olja att steka i","ägg","växtbaserad mjölkdryck","salt","timjan, torkad","tofu, fast eller silkes","växtbaserad mjölkdryck","salt","timjan, torkad","växtbaserad grädde","vetemjöl","salt","timjan, torkad"],
      ["2 dl","2 dl","0.5 tsk","1 dl","2 msk","1 st","2 st","200 g","100 g","10 st","1 dl","1 dl","75 g"," ","3 st","3 dl","1 krm","1 tsk","200 g","2 dl","1 krm","1 tsk","2.5 dl","4 msk","1 krm","1 tsk"]
  );
  
  
  
  const r687 = new Recipe(
      "Vegetarisk linsstroganoff",
      2, 
      ["röda linser, torkade","gul lök","rökt paprikapulver","växtbaserad grädde","vatten","tomatpuré","grönsaksbuljongtärning","soja, gärna japansk ex Kikkoman","soltorkade tomater","morötter","Salt & svartpeppar","Olja att steka i","ris"],
      ["3 dl","1 st","1 tsk","2 dl","1 dl","2 msk","1 st","1 msk","8 st","2 st"," "," ","4 port"]
  );
  
  
  
  const r474 = new Recipe(
      "Potatissallad med rödlök, tomat, fetaost och oliver",
      2, 
      ["potatis","vita bönor, kokta","dl","tomater","rödlök","persiljestjälkar","oliver (+ lite av spadet)","fetaost","Olja, salt & svartpeppar"],
      ["1 kg","3 dl","alternativt 1.2","2 st","1 st","5 st","10 st","75 g"," "]
  );
  
  
  
  const r363 = new Recipe(
      "Spenatpasta med tomattopping",
      2, 
      ["soltorkade tomater","rökt paprikapulver","soja","vitlöksklyftor","havregrädde","spenat, fryst","grönsaksbuljongtärning","solroskärnor","Olja att steka i","pasta"],
      ["8 st","1 tsk","1 tsk","2 st","2.5 dl","225 g","1 st","1 dl"," ","4 port"]
  );
  
  
  
  const r967 = new Recipe(
      "Potatisplåt med dilltsatsiki och snabbpicklad rödlök",
      2, 
      ["potatis","blomkål, fryst eller färsk","kikärtor, kokta","olja","rökt paprikapulver","salt","ev. lite chili eller sambal oelek","zucchini eller gurka","vitlöksklyfta","valfri yoghurt/fraiche","salt","dill, fryst eller färsk","citron","rödlök"],
      ["1 kg","200 g","5 dl","1 msk","2 tsk","1 nypa"," ","0.5 st","1 st","2 dl","1 nypa","1 msk","0.5 st","1 st"]
  );
  
  
  
  const r900 = new Recipe(
      "Bolognese på gula ärtor",
      2, 
      ["gula ärtor, torkade","gul lök","vitlöksklyftor","paprikapulver","tomatpuré","krossade tomater","grönsaksbuljongtärning","vatten","kålrot","örter, torkade eller frysta ex. basilika/persilja/oregano","sambal oelek eller chili","havregrädde","Salt & svartpeppar","Olja att steka i","pasta"],
      ["3 dl","1 st","2 st","1 msk","1 msk","4 dl","0.5 st","2 dl","150 g","2 msk","1 krm","2 dl"," "," ","4 port"]
  );
  
  
  
  const r379 = new Recipe(
      "Veganska falafel på gula ärtor",
      2, 
      ["gula ärtor, torkade","gul lök","vitlöksklyftor","grönsaksbuljongtärning","persilja, färsk eller fryst hackad","spiskummin","paprikapulver","rökt paprikapulver","sriracha eller sambal oelek","jordnötssmör eller tahini","Olja att steka i"],
      ["250 g","1 st","2 st","1 st","0.5 dl","1 tsk","0.5 tsk","1 tsk","0.5 tsk","2 msk"," "]
  );
  
  
  
  const r716 = new Recipe(
      "Billig rotfruktssoppa",
      2, 
      ["potatis","sötpotatis","morötter","palsternacka","gul lök","vitlöksklyftor","röd chili","vatten","grönsaksbuljongtärning","havregrädde","Salt & peppar","Olja att steka i","kikärtor, kokta","rökt paprikapulver","Raps- eller olivolja","Salt"],
      ["500 g","1 st","2 st","2 st","1 st","2 st","1 st","8 dl","1 st","2 dl"," "," ","4 dl","1 tsk"," "," "]
  );
  
  
  
  const r336 = new Recipe(
      "Grönkålssallad med belugalinser och kardemummadressing",
      2, 
      ["matvete","belugalinser","grönkål","kardemummakärnor","olja","citron, saften","kanel","apelsin","fetaost","Salt"],
      ["2 dl","2 dl","200 g","6 st","0.5 dl","0.5 st","1 krm","1 st","75 g"," "]
  );
  
  
  
  const r341 = new Recipe(
      "Vegansk bolognese på sojafärs",
      2, 
      ["sojafärs, torkad","gul lök","vitlöksklyfta","röd chili","rökt paprikapulver","solroskärnor","krossade tomater","grönsaksbuljongtärning","tomatpuré","vatten","Salt & svartpeppar","Olja att steka i","pasta"],
      ["125 g","1 st","1 st","0.5 st","1 tsk","1 dl","4 dl","1 st","1 msk","2 dl"," "," ","4 port"]
  );
  
  
  
  const r327 = new Recipe(
      "Veganska ”Köttbullar” med pasta och tomatsås",
      2, 
      ["pasta","gul lök","vitlöksklyftor","krossade tomater","grönsaksbuljongtärning","tomatpuré","örter, torkade ex. basilika/oregano/timjan","Olja att steka i","solroskärnor","kidneybönor, kokta","havregryn","gul lök","soja","Svartpeppar","Olja att steka i"],
      ["4 port","1 st","2 st","4 dl","1 st","1 msk","2 msk"," ","1 dl","6 dl","1 dl","1 st","1 msk"," "," "]
  );
  
  
  
  const r652 = new Recipe(
      "Lins- och pumpabollar med ajvar relish",
      2, 
      ["röda linser, torkade","vitlöksklyfta","jordnötssmör eller tahini","pumpa ex. butternut","potatismjöl","sesamfrön","persilja, fryst eller färsk","ajvar relish","Salt & peppar","Olja att steka i","potatis"],
      ["2 dl","1 st","1 msk","250 g","1 msk","1 msk","1 msk","2 msk"," "," ","1 kg"]
  );
  
  
  
  const r171 = new Recipe(
      "Tomatsoppa med ugnsrostade blomkål",
      2, 
      ["blomkålshuvud","rökt paprikapulver","raps- eller olivolja","gul lök","vitlöksklyftor","spiskummin","krossade eller hela tomater","grönsaksbuljongtärning","sambal oelek eller tabasco","valfria bönor ex. kidneybönor/vita bönor/svarta bönor","Salt & svartpeppar"],
      ["1 st","1 tsk","1 tsk","2 st","2 st","1 msk","8 dl","1 st","1 krm","6 dl"," "]
  );
  
  
  
  const r988 = new Recipe(
      "Broccolipasta",
      2, 
      ["solroskärnor","havredryck","broccoli, fryst eller färsk","vitlöksklyftor","ost, riven","Olja att steka i","Salt & svartpeppar","pasta"],
      ["2 dl","3 dl","500 g","2 st","1 dl"," "," ","4 port"]
  );
  
  
  
  const r447 = new Recipe(
      "Broccolipasta",
      2, 
      ["solroskärnor","havredryck","broccoli, fryst eller färsk","vitlöksklyftor","ost, riven","Olja att steka i","Salt & svartpeppar","pasta"],
      ["2 dl","3 dl","500 g","2 st","1 dl"," "," ","4 port"]
  );
  
  
  
  const r51 = new Recipe(
      "Broccolipasta",
      2, 
      ["solroskärnor","havredryck","broccoli, fryst eller färsk","vitlöksklyftor","ost, riven","Olja att steka i","Salt & svartpeppar","pasta"],
      ["2 dl","3 dl","500 g","2 st","1 dl"," "," ","4 port"]
  );
  
  
  
  const r431 = new Recipe(
      "Kladdig kladdkaka",
      2, 
      ["smör till formen","ströbröd till formen","smör","ägg","strösocker","kakao","vaniljsocker","vetemjöl","salt","florsocker till garnering","vispgrädde","färska bär"],
      ["","","100 g","2 st","2 1/2 dl","3 msk","2 tsk","1 1/2 dl","1 krm","","2 dl",""]
  );
  
  
  
  const r624 = new Recipe(
      "Capricciosa",
      2, 
      ["kungsörnen pizzamjöl (700 g motsvarar ca 12 dl)","salt","jäst","strösocker","ljummet vatten (37°C)","mjöl (till utbakning)","förp hela konserverade tomater (à 390 g)","torkad basilika","salt","svartpeppar","skivad skinka","färska champinjoner","riven ost","torkad oregano"],
      ["700 g","1 tsk","50 g","1 tsk","5 dl","","1/2","1/2 tsk","1 krm","2 krm","240 g","250 g","150 g","1 tsk"]
  );
  
  