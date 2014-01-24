/**
 * Created with JetBrains WebStorm.
 * User: mdvn
 * Date: 1/17/14
 * Time: 5:44 PM
 * To change this template use File | Settings | File Templates.
 */

//var monstersArray=["Troll","Kobold","Merman"];

//Trolls >Forests, Kobolds>Plains, Mermen>Water

function makeMonster(landType, randomNumber){
//takes in land type and a random number and returns a monster (maybe)
    var TrollPercentage=.5;
    var KoboldPercentage=.4;
    var MermanPercentage=.3;


    if(landType==String.fromCharCode(177)  && randomNumber<TrollPercentage){
         return 'Troll'
    } else
    if(landType==String.fromCharCode(178) && randomNumber<KoboldPercentage)
    { return 'Kobold'}
    else
    if(landType=="w" && randomNumber<MermanPercentage){ return 'Merman'}
    else
    if(landType=="C" && randomNumber<TrollPercentage){
        return 'Bat'
    } else
    if(landType=="L" && randomNumber<KoboldPercentage)
    { return 'Elemental'}
    else
    if(landType=="D" && randomNumber<MermanPercentage){ return 'Merman'}
    else {return "Worm";}




}

//create a





