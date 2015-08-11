/**
 * Created by Zelada_t on 11/08/2015.
 */
var room= require('./models/room');
var hero= require('./models/hero');


var newRoom= new room({
    idRoom:"test",
    nameRoom:"game1"
});
var newHero=new hero({
    nameHero:"adrian",
    score:2
});
newRoom.addHero(newHero);

var x = newRoom.getHero(0);

console.log(x.getModel());

//console.log(newRoom.getModel());




