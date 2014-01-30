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

  //  console.clear();
    //console.log(player) ;
    console.log(twoLayerWorld[currentLayer][yy][xx]);
    console.log(worldDisplay(twoLayerWorld[currentLayer], xx, yy, character));
    //console.log(makeMonster(Game[xx][yy],0));

    var promptedDirectionValue = prompt('Direction? (n,s,w,e,u,d,f,a)');
    if(promptedDirectionValue=="n"){yy--;}
    else if(promptedDirectionValue=="s"){yy++;}
    else if(promptedDirectionValue=="e"){xx++;}
    else if(promptedDirectionValue=="w"){xx--;}
    else if(promptedDirectionValue=="f"){whileCondition=false;}
    if(twoLayerWorld[currentLayer][yy][xx]=="Ladder" && promptedDirectionValue=="u"){currentLayer--;}
//    (twoLayerWorld[currentLayer][xx][yy]=="Ladder" && promptedDirectionValue=="u")?currentLayer--:currentLayer;

    if(twoLayerWorld[currentLayer][yy][xx]==String.fromCharCode(176) && promptedDirectionValue=="d"){currentLayer++;}
    if(promptedDirectionValue.toLowerCase()=='a' && twoLayerWorld[currentLayer+2][yy][xx].length>0){
        player=combat(player, twoLayerWorld[currentLayer+2][yy][xx]) ;

    }




//    console.log(Game[yy][xx]); //THis allows us to check specific values of the world
}


//console.log(monster[troll][exp]+monster[troll][exp]+3*monster[kobold][exp]);
//
//console.log(Math.floor(
//    (monster[troll][treasure][max]-monster[troll][treasure][min])
//    *Math.random())
//    +monster[troll][treasure][min])







