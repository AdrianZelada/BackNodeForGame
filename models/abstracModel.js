/**
 * Created by Zelada_t on 11/08/2015.
 */
module.exports=function(){
    return{
        getModel:function(){
            return this.schema;
        },
        setModel:function(model){
            return this.schema=model;
        },
        getProperty:function(property){
            return this.schema[property];
        }
    }
}