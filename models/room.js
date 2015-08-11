/**
 * Created by Zelada_t on 10/08/2015.
 */
var abstractModel=require('./abstracModel');

var Room=function(objConfig){
    this.schema={
        idRoom:objConfig.idRoom || "",
        nameRoom:objConfig.nameRoom || "",
        listHero:[]
    }

    this.getAllHero=function(){
        return this.schema.listHero;
    };

    this.getHero=function(index){
        return this.schema.listHero[index];
    };

    this.addHero=function(hero){
        this.schema.listHero.push(hero);
    };

    this.deleteHero=function(hero){
        var index=null;
        this.schema.listHero.forEach(function(val,ind){
            if(val.id==hero.id){
                index=ind;
            }
        })
        this.schema.listHero.splice(index,1);
    }
}
Room.prototype=new abstractModel();
module.exports=Room;
