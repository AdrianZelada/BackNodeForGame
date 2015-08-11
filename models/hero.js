/**
 * Created by Zelada_t on 10/08/2015.
 */
var abstractModel=require('./abstracModel');

var hero=function(objConfig){
    this.schema={
        id:objConfig.id || "",
        nameHero:objConfig.nameHero || null,
        score:objConfig.score || null
    }
}

hero.prototype=new abstractModel();

module.exports=hero;