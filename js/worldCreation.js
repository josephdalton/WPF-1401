var Game=[];

Game[0]=[];
Game[1]=[];
Game[2]=[];
Game[3]=[];
Game[4]=[];
Game[5]=[];
Game[6]=[];
Game[7]=[];
Game[8]=[];
Game[9]=[];



Game[0][0]="water";
Game[0][1]="water";
Game[0][2]="water";
Game[0][3]="water";
Game[0][4]="water";
Game[0][5]="Forest";
Game[0][6]="Forest";
Game[0][7]="Forest";
Game[0][8]="Forest";
Game[0][9]="Forest";

Game[1][0]="water";
Game[1][1]="water";
Game[1][2]="water";
Game[1][3]="water";
Game[1][4]="Forest";
Game[1][5]="Forest";
Game[1][6]="Forest";
Game[1][7]="Forest";
Game[1][8]="Forest";
Game[1][9]="Forest";

Game[2][0]="water";
Game[2][1]="water";
Game[2][2]="water";
Game[2][3]="Forest";
Game[2][4]="Forest";
Game[2][5]="Forest";
Game[2][6]="Forest";
Game[2][7]="Forest";
Game[2][8]="Forest";
Game[2][9]="Forest";

Game[3][0]="water";
Game[3][1]="Forest";
Game[3][2]="Forest";
Game[3][3]="Forest";
Game[3][4]="Forest";
Game[3][5]="Forest";
Game[3][6]="Forest";
Game[3][7]="Forest";
Game[3][8]="Forest";
Game[3][9]="Forest";

Game[4][0]="Forest";
Game[4][1]="Dungeon";
Game[4][2]="Forest";
Game[4][3]="Forest";
Game[4][4]="Forest";
Game[4][5]="Forest";
Game[4][6]="Forest";
Game[4][7]="Forest";
Game[4][8]="Forest";
Game[4][9]="Forest";

Game[5][0]="water";
Game[5][1]="water";
Game[5][2]="water";
Game[5][3]="water";
Game[5][4]="Forest";
Game[5][5]="Forest";
Game[5][6]="Forest";
Game[5][7]="Forest";
Game[5][8]="Forest";
Game[5][9]="Forest";

Game[6][0]="water";
Game[6][1]="water";
Game[6][2]="water";
Game[6][3]="water";
Game[6][4]="Forest";
Game[6][5]="Forest";
Game[6][6]="Forest";
Game[6][7]="Forest";
Game[6][8]="Forest";
Game[6][9]="Forest";

Game[7][0]="water";
Game[7][1]="water";
Game[7][2]="water";
Game[7][3]="water";
Game[7][4]="Forest";
Game[7][5]="Forest";
Game[7][6]="Forest";
Game[7][7]="Forest";
Game[7][8]="Forest";
Game[7][9]="Forest";

Game[8][0]="Forest";
Game[8][1]="Forest";
Game[8][2]="Dungeon";
Game[8][3]="Desert";
Game[8][4]="Desert";
Game[8][5]="Desert";
Game[8][6]="Desert";
Game[8][7]="Desert";
Game[8][8]="Desert";
Game[8][9]="Desert";

Game[9][0]="Desert";
Game[9][1]="Desert";
Game[9][2]="Desert";
Game[9][3]="Desert";
Game[9][4]="Desert";
Game[9][5]="Desert";
Game[9][6]="Desert";
Game[9][7]="Desert";
Game[9][8]="Desert";
Game[9][9]="Desert";


function DungeonGenerator(worldArray){
    var dungeonX1=0;
    var dungeonX2=0;
    var dungeonY1=0;
    var dungeonY2=0;
    var firstVsSecondDungeonInstance = true;
    var completedWorld=[];
    completedWorld[0]=worldArray;
    completedWorld[1]=[];
    completedWorld[2]=[];
    completedWorld[3]=[];
    completedWorld[4]=[];
    completedWorld[5]=[];



    for(i=0;i<worldArray.length;i++){
     for(j=0;j<worldArray[i].length;j++){
        completedWorld[2][i][j]=makeMonster(completedWorld[0][i][j], Math.random());
        if(worldArray[i][j]=="Dungeon" && firstVsSecondDungeonInstance==true){
             dungeonX1=i;
            dungeonY1=j;
            firstVsSecondDungeonInstance=false;
        } else if(worldArray[i][j]=="Dungeon"){
            dungeonX2=i;
            dungeonY2=j;
        }

         }
     }
     for(i=0;i<worldArray.length;i++){
         completedWorld[1][i]=[];
         completedWorld[2][i]=[];
         completedWorld[3][i]=[];
         completedWorld[4][i]=[];
         completedWorld[5][i]=[];


         for(j=0;j<worldArray[i].length;j++){
         var randomWorldSeed=Math.random();
         //Cave 1/3, lava 1/3, dirt 1/3, ladder on dungeon squares
             if((i==dungeonX1 && j==dungeonY1)
                 ||
                 (i==dungeonX2 && j==dungeonY2) ){
                 completedWorld[1][i][j]="Ladder";
             } else if (randomWorldSeed<=1/3){
                 completedWorld[1][i][j]="Caves";

             } else if (randomWorldSeed>=2/3){
                completedWorld[1][i][j]="Lava";
             } else {
                 completedWorld[1][i][j]="Dirt";}


         }


     }


    return completedWorld;


}


var twoLayerWorld = DungeonGenerator(Game);
console.log(twoLayerWorld[0]);
console.log(twoLayerWorld[1]);


