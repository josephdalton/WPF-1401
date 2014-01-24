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

var forest = String.fromCharCode(177) ;
var water = "w" ;//String.fromCharCode(179) ;
var deserts = String.fromCharCode(178) ;
var dungeon = String.fromCharCode(176) ;


Game[0][0]=water;
Game[0][1]=water;
Game[0][2]=water;
Game[0][3]=water;
Game[0][4]=water;
Game[0][5]=forest;
Game[0][6]=forest;
Game[0][7]=forest;
Game[0][8]=forest;
Game[0][9]=forest;

Game[1][0]=water;
Game[1][1]=water;
Game[1][2]=water;
Game[1][3]=water;
Game[1][4]=forest;
Game[1][5]=forest;
Game[1][6]=forest;
Game[1][7]=forest;
Game[1][8]=forest;
Game[1][9]=forest;

Game[2][0]=water;
Game[2][1]=water;
Game[2][2]=water;
Game[2][3]=forest;
Game[2][4]=forest;
Game[2][5]=forest;
Game[2][6]=forest;
Game[2][7]=forest;
Game[2][8]=forest;
Game[2][9]=forest;

Game[3][0]=water;
Game[3][1]=forest;
Game[3][2]=forest;
Game[3][3]=forest;
Game[3][4]=forest;
Game[3][5]=forest;
Game[3][6]=forest;
Game[3][7]=forest;
Game[3][8]=forest;
Game[3][9]=forest;

Game[4][0]=forest;
Game[4][1]=dungeon;
Game[4][2]=forest;
Game[4][3]=forest;
Game[4][4]=forest;
Game[4][5]=forest;
Game[4][6]=forest;
Game[4][7]=forest;
Game[4][8]=forest;
Game[4][9]=forest;

Game[5][0]=water;
Game[5][1]=water;
Game[5][2]=water;
Game[5][3]=water;
Game[5][4]=forest;
Game[5][5]=forest;
Game[5][6]=forest;
Game[5][7]=forest;
Game[5][8]=forest;
Game[5][9]=forest;

Game[6][0]=water;
Game[6][1]=water;
Game[6][2]=water;
Game[6][3]=water;
Game[6][4]=forest;
Game[6][5]=forest;
Game[6][6]=forest;
Game[6][7]=forest;
Game[6][8]=forest;
Game[6][9]=forest;

Game[7][0]=water;
Game[7][1]=water;
Game[7][2]=water;
Game[7][3]=water;
Game[7][4]=forest;
Game[7][5]=forest;
Game[7][6]=forest;
Game[7][7]=forest;
Game[7][8]=forest;
Game[7][9]=forest;

Game[8][0]=forest;
Game[8][1]=forest;
Game[8][2]=dungeon;
Game[8][3]=deserts;
Game[8][4]=deserts;
Game[8][5]=deserts;
Game[8][6]=deserts;
Game[8][7]=deserts;
Game[8][8]=deserts;
Game[8][9]=deserts;

Game[9][0]=deserts;
Game[9][1]=deserts;
Game[9][2]=deserts;
Game[9][3]=deserts;
Game[9][4]=deserts;
Game[9][5]=deserts;
Game[9][6]=deserts;
Game[9][7]=deserts;
Game[9][8]=deserts;
Game[9][9]=deserts;


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
        //console.log(completedWorld[0][i][j]);

        if(worldArray[i][j]==dungeon && firstVsSecondDungeonInstance==true){
             dungeonX1=i;
            dungeonY1=j;
            firstVsSecondDungeonInstance=false;
        } else if(worldArray[i][j]==dungeon){
            dungeonX2=i;
            dungeonY2=j;
        }

         }
     }
     for(i=0;i<worldArray.length;i++){
         completedWorld[1][i]=[];    //Dungeon
         completedWorld[2][i]=[];    //Monsters for layer 0
         completedWorld[3][i]=[];    //Monsters for layer 1
         completedWorld[4][i]=[];    //Treasure for layer 0
         completedWorld[5][i]=[];    //Treasure for layer 1


         for(j=0;j<worldArray[i].length;j++){
         var randomWorldSeed=Math.random();
         //Cave 1/3, lava 1/3, dirt 1/3, ladder on dungeon squares
             if((i==dungeonX1 && j==dungeonY1)
                 ||
                 (i==dungeonX2 && j==dungeonY2) ){
                 completedWorld[1][i][j]="H";
             } else if (randomWorldSeed<=1/3){
                 completedWorld[1][i][j]="C";

             } else if (randomWorldSeed>=2/3){
                completedWorld[1][i][j]="L";
             } else {
                 completedWorld[1][i][j]="D";}
         }
     }
    for(i=0;i<worldArray.length;i++){
        for(j=0;j<worldArray[i].length;j++){
            completedWorld[2][i][j]=makeMonster(completedWorld[0][i][j],Math.random());
        }
    }
            return completedWorld;
}

var twoLayerWorld = DungeonGenerator(Game);
//console.log(twoLayerWorld[0]);
//console.log(twoLayerWorld[1]);



