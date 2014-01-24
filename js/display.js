/**
 * Created with JetBrains WebStorm.
 * User: mdvn
 * Date: 1/22/14
 * Time: 6:31 PM
 * To change this template use File | Settings | File Templates.
 */

function worldDisplay(Game, xx, yy, character ){
var outputString="";
for(outer=0;outer<Game.length;outer++){
    for(inner=0;inner<Game[outer].length;inner++){
        if(outer==yy && inner==xx){
            outputString+=character+" ";
        }
        else{
            outputString=outputString+ Game[outer][inner]+" ";
        }
    }
    outputString+="\n";//   Same as outputString=outputString+'/n';
}
    return outputString;
}