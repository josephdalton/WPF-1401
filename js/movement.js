/**
 * Created with JetBrains WebStorm.
 * User: mdvn
 * Date: 1/15/14
 * Time: 7:02 PM
 * To change this template use File | Settings | File Templates.
 */
var outputString='';
var character="@" ;
var xx = 1;
var yy=1;
var whileCondition=true;
var currentLayer=0;
console.log(worldDisplay(twoLayerWorld[currentLayer], xx, yy, character));

while(whileCondition){

    console.clear();
    console.log(twoLayerWorld[currentLayer][yy][xx]);
    console.log(worldDisplay(twoLayerWorld[currentLayer], xx, yy, character));
    console.log(makeMonster(Game[xx][yy],0));

    var promptedDirectionValue = prompt('Direction? (n,s,w,e,u,d,f)');
    if(promptedDirectionValue=="n"){yy--;}
    else if(promptedDirectionValue=="s"){yy++;}
    else if(promptedDirectionValue=="e"){xx++;}
    else if(promptedDirectionValue=="w"){xx--;}
    else if(promptedDirectionValue=="f"){whileCondition=false;}
    if(twoLayerWorld[currentLayer][yy][xx]=="Ladder" && promptedDirectionValue=="u"){currentLayer--;}
//    (twoLayerWorld[currentLayer][xx][yy]=="Ladder" && promptedDirectionValue=="u")?currentLayer--:currentLayer;

    if(twoLayerWorld[currentLayer][yy][xx]==String.fromCharCode(176) && promptedDirectionValue=="d"){currentLayer++;}





//    console.log(Game[yy][xx]); //THis allows us to check specific values of the world
}

var type=0;
var exp=1;
var treasure=2;
var troll=0;
var kobold=1;
var merman=2;
var min=0;
var max=1;

var monster=[["Troll",10,[5,12]],["Kobold",5,[3,20]],["Merman",15,[9,35]]];
//console.log(monster[troll][exp]+monster[troll][exp]+3*monster[kobold][exp]);
//
//console.log(Math.floor(
//    (monster[troll][treasure][max]-monster[troll][treasure][min])
//    *Math.random())
//    +monster[troll][treasure][min])







