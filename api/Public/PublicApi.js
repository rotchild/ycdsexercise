/**
 * Created by cx on 17-6-16.
 */
exports.GetApi=function(_req,_res,_callbackFunction,_err){
 return{
     req:_req,
     res:_res,
     callbackFunction:_callbackFunction,
     err:_err,
     GetParams:function(paramName){
         if(typeof(_req.query[paramName])=="undefined"&&typeof(_req.body[paramName])=="undefined"){
             throw{message:"缺乏参数"+paramName};
         }else if(!_req.query[paramName]){
             return _req.body[paramName];
         }else{
             return _req.query[paramName];
         }
     },
     LoginCheck:function(){
         console.log('login enter');
         var Me,username,password;
         Me=this;
         username=this.GetParams("username");
         password=this.GetParams("password");
         console.log('username'+username);
         Me.callbackFunction(null,null);
     }
 };
};