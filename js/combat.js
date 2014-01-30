/**
 * Created with JetBrains WebStorm.
 * User: mdvn
 * Date: 1/29/14
 * Time: 4:41 PM
 * To change this template use File | Settings | File Templates.
 */
//add two arrays containing which player and monster information
function combat(player, monster){
//monter stats --
    var strmon= 0;
    var conmon=1;
    var dexmon=2;
    var hpmon=3;
    var acmon=4;
    var goldmon=5;
    var expmon=6;
    var damagemon=7;

    var str=0;
    var con=1;
    var dex=2;
    var int=3;
    var wis=4;
    var cha=5;
    var strMod=6;
    var conMod=7;
    var dexMod=8;
    var hp=9;
    var ac = 10;
    var gold =11;
    var exp=12;
    var damage=13;

    var damlow=0;
    var damhigh=1;



//function

//init roll
if(Math.floor(Math.random()*19+1)+player[dexMod]>=Math.floor(Math.random()*19+1)+monster[dexmon])

    {
        console.log('Player');
    while(player[hp]>0 && monster[hpmon]>0){
        console.log(player);

        console.log(monster);

    //player hits monster
        if(player[hp]>0){
            if(Math.floor(Math.random()*19+1)+player[strMod]>=monster[acmon]+monster[dexmon] )
                {
                monster[hpmon]-=Math.floor((player[damage][damhigh]-player[damage][damlow] )*Math.random())+player[damage][damlow]
                }
        }
       //monster hits player
    if(monster[hpmon]>0){
            if(Math.floor(Math.random()*19+1)+monster[strmon]>=player[ac] )
                {
                player[hp]-=Math.floor((monster[damagemon][damhigh]-monster[damagemon][damlow] )*Math.random())+monster[damagemon][damlow]
                }
    }
        else{
        //  accrue exp

    }
        if(player[hp]<=0){//death event

         }
    }


}
    else
{       while(player[hp]>0 && monster[hpmon]>0){
    console.log(player);
    console.log(monster);

    //monster hits player
    if(monster[hpmon]>0){
        if(Math.floor(Math.random()*19+1)+monster[strmon]>=player[ac] )
        {
            player[hp]-=Math.floor((monster[damagemon][damhigh]-monster[damagemon][damlow] )*Math.random())+monster[damagemon][damlow]
        }
    }

    if(player[hp]>0){
        if(Math.floor(Math.random()*19+1)+player[strMod]>=monster[acmon]+monster[dexmon] )
        {
            monster[hpmon]-=Math.floor((player[damage][damhigh]-player[damage][damlow] )*Math.random())+player[damage][damlow]
        }
    } else{
        player[exp]+=monster[expmon];
        player[gold]+=monster[goldmon];

        return player;

        //  accrue exp

    }}


    if(player[hp]<=0){//death event
     return player;
    }
}







//to hit roll for attacker1
//damage att1
//to hit roll att2
//damage att2
//evaluation of the combat



}
