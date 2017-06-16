/**
 * Created by cx on 17-6-16.*/
(function(){
    var app,express,http,routes,path,settings,server;

    express = require('express');
    routes = require('./routes/routes');
    http = require('http');
    path = require('path');
    settings=require('./setting');
    app=express();
    app.set('port',settings.serverPort);
    app.use(express.json());
    app.use(express.cookieParser());
    app.use(app.router);//???
    app.use(express["static"](path.join(__dirname,'web'),{
        maxAge:30*24*60*60*1000
    }));
    app = express();
    app.set('port',settings.serverPort);

    app.use(app.router);
    app.use(express["static"](path.join(__dirname, 'web'), {
        maxAge: 30 * 24 * 60 * 60 * 1000
    }));
    app.configure('development', function () {
        return app.use(express.errorHandler());
    });
    app.configure('production', function () {
        return app.use(express.errorHandler());
    });
    routes(app);

    server=http.createServer(app).listen(app.get('port'),function(){
    return console.log('LoginServer is on'+app.get('port'));
})
}).call(this);

