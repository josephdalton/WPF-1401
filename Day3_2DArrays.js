/**
 * Created with JetBrains WebStorm.
 * User: mdvn
 * Date: 1/10/14
 * Time: 5:14 PM
 * To change this template use File | Settings | File Templates.
 */




//
//if(world[0][0]=="Water"){
//    console.log("WATER");
//} else if(world[0][0]=="Forest"){
//    console.log("Forest");
//}
//else {console.log("Desert");}
//
//
//var seed1=1;
//var seed2=3;
//var seed3=5;
//
//if(seed2>=seed1)
//    {
//        console.log('seed2>=seed1');
//    }
//else if(seed2==seed1)
//    {
//        console.log("seed2==seed1");
//    }
//else
//    {
//        console.log("seed2<=seed1");
//    }
//
//if(seed1!=seed3){console.log("Seed1 and 3 are different.")}
////console.log(world[0]);
//
//var world =[];
//world[0]=[];
//world[1]=[];
//world[2]=[];
//world[3]=[];
//world[4]=[];
//world[5]=[];
//world[6]=[];
//world[7]=[];
//world[8]=[];
//world[9]=[];
//
//world[0][0]="Water";
//world[0][1]="Water";
//world[0][2]="Water";
//
//
//if(world[0][0]=="Water"){
//    console.log("WATER");
//} else if(world[0][0]=="Forest"){
//    console.log("Forest");
//}
//else {console.log("Desert");}
//
//
//var seed1=1;
//var seed2=3;
//var seed3=5;
//
//if(seed2>=seed1)
//    {
//        console.log('seed2>=seed1');
//    }
//else if(seed2==seed1)
//    {
//        console.log("seed2==seed1");
//    }
//else
//    {
//        console.log("seed2<=seed1");
//    }
//
//if(seed1!=seed3){console.log("Seed1 and 3 are different.")}
////console.log(world[0]);
//



//
//
//console.log(world[0][0]);
//var rowString='';
//rowString='Water';
//rowString=rowString+'\t';
//rowString=rowString+'Water';
//rowString=rowString+'Fire';
//
//
//console.log(rowString);
//
//for(loopItt=0;loopItt<world.length;loopItt++){
//console.log(world[0][loopItt]);}
//



//
//
//for(i=0;i<4;i++){
//    for(j=0;j<4;j++){
//        for(k=0;k<4;k++){
//          console.log("i:"+i+"\tj:"+j+"\tk:"+k);
//
//        }
//    }
//}



//Step through each element of the array Game and load
// the data into a formatted string and display the values

var outputString='';

for(outer=0;outer<Game.length;outer++){
    for(inner=0;inner<Game[outer].length;inner++){
    outputString=outputString+ Game[outer][inner]+"\t";
    }
    outputString+="\n";//   Same as outputString=outputString+'/n';

}
console.log(outputString);

var xx = 1;
var yy=1;
var whileCondition=true;
while(whileCondition){

    var promptedDirectionValue = prompt('Direction? (n,s,w,e)');
    if(promptedDirectionValue=="n"){yy--;}
    else if(promptedDirectionValue=="s"){yy++;}
    else if(promptedDirectionValue=="e"){xx++;}
    else if(promptedDirectionValue=="w"){xx--;}
    else if(promptedDirectionValue=="f"){whileCondition=false;}
    console.log(Game[yy][xx]);
}


//var testRandom=Math.random();
//if(testRandom<.5){console.log(testRandom+"<.5")}
//
//
//console.log(testRandom);




