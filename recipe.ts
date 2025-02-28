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

