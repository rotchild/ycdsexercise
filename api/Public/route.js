/**
 * Created by cx on 17-6-16.
 */
module.exports = function(app){
    console.log('public route enter');
    app.all('/api/Public/:ifName',function(req,res){
        var ifName=req.params.ifName;
        if(!ifName){
            console.log('404');
            res.send(404);
        }

        function callbackFunction(_err,_result){
            res.send({err:_err,success:!_err,data:_result});
        }
        var errors=require('../libs/errMark.js');
        var apiPublic=require('./PublicApi.js').GetApi(req,res,callbackFunction,errors);
        try{
        if(apiPublic[ifName]){
            console.log('enter ifname');
            apiPublic[ifName]();
        }else{
            res.send({err:errors.NoInterface,success:false,data:null});
        }
        }catch(_err){
            res.send({err:_err,success:!_err,data:_err.message});
        }




    });
}