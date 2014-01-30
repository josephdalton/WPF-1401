/**
 * Created with JetBrains WebStorm.
 * User: mdvn
 * Date: 1/17/14
 * Time: 5:44 PM
 * To change this template use File | Settings | File Templates.
 */

//var monstersArray=["Troll","Kobold","Merman"];

//Trolls >Forests, Kobolds>Plains, Mermen>Water
function craftMonster(monsterArray){
    if(monsterArray.length>1){
    var lowHP = monsterArray[4][0];
    var highHP = monsterArray[4][1];
    var lowGold = monsterArray[6][0];
    var highGold = monsterArray[6][1];
    monsterArray[4] = Math.floor((highHP-lowHP)*Math.random()) + lowHP;
    monsterArray[6] = Math.floor((highGold-lowGold)*Math.random()) + lowGold;
   return monsterArray ;
    }
    else {return "";}




}



function makeMonster(landType, randomNumber){
//takes in land type and a random number and returns a monster (maybe)
//["Worm",10,[5,12]],["Spider",5,[3,20]],["Mole",15,[9,35]]]
    var type=0;
    var exp=1;
    var treasure=2;
    var troll=0;
    var kobold=1;
    var merman=2;
    var worm=3;
    var spider=4;
    var mole=5;
    var min=0;
    var max=1;
    //strmon, conmod, dexmod, hp, ac, gold, exp,damage

    var monster=
        [["Troll",1,4,2,[1,2],15,[5,12],200,[1,6]],
        ["Kobold",1,5,3,[10,12],15,[6,12],100,[1,6]],
        ["Merman",-2,3,-1,[0,16],12,[15,22],10,[1,6]],
        ["Worm",1,-3,2,[10,15],10,[5,30],20,[1,6]],
        ["Spider",-1,5,5,[0,4],17,[12,13],25,[1,6]],
        ["Mole",2,2,2,[1,2],11,[6,17],2,[1,6]],[0]];

    var TrollPercentage=.5;
    var KoboldPercentage=.4;
    var MermanPercentage=.3;
    var wormPercentage=.5;
    var spiderPercentage=.4;
    var molePercentage=.3;
    var monsterSelector=6;



    //var


    if(landType==String.fromCharCode(177)  && randomNumber<TrollPercentage){
         monsterSelector=0;
        }
    else if(landType==String.fromCharCode(178) && randomNumber<KoboldPercentage)
    {    monsterSelector=1;
        }
    else
    if(landType=="w" && randomNumber<MermanPercentage){
        monsterSelector=2;
    }
    else if(landType=="C" && randomNumber<wormPercentage){
        monsterSelector=3;
    } else
    if(landType=="L" && randomNumber<spiderPercentage)
    {   monsterSelector=4;

    }
    else
    if(landType=="D" && randomNumber<molePercentage){ return 'mole'}
    else{  monsterSelector=5;

        }


    return craftMonster(monster[monsterSelector]);






}






//create a





