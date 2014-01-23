/**
 * Created with JetBrains WebStorm.
 * User: mdvn
 * Date: 1/17/14
 * Time: 5:44 PM
 * To change this template use File | Settings | File Templates.
 */

var monstersArray=["Troll","Kobold","Merman"];

//Trolls >Forests, Kobolds>Plains, Mermen>Water

function makeMonster(landType, randomNumber){
//takes in land type and a random number and returns a monster (maybe)
    var TrollPercentage=.5;
    var KoboldPercentage=.4;
    var MermanPercentage=.3;


    if(landType=="Forest" && randomNumber<TrollPercentage){
         return 'Troll'
    } else
    if(landType=="Plain" && randomNumber<KoboldPercentage)
    { return 'Kobold'}
    else
    if(landType=="Water" && randomNumber<MermanPercentage){ return 'Merman'}
    else {return "";}
}

//create a





