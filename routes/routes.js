/**
 * Created by cx on 17-6-16.
 */
(function(){
var publicRoute;
    publicRoute = require('../api/Public/route');
    module.exports = function (app) {
        console.log('routes route enter');
        return publicRoute(app);
    };
}).call(this);