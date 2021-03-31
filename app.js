
const Express = require("express");
const parser = require('body-parser');

const auth_service = require('./services/auth_service')

const app=Express();

app.use(parser.json())
app.use(auth);


app.get('/',(req,res)=>{
    res.send('Hello world')
})
app.get('/v3',(req,res)=>{
    res.send('Hello world2')
})
function auth(req, res, next){
    if(req.url !== '/login'){
        if ('token' in req.headers && auth_service.validate_token(req.headers['token'])){
            next();
        }else{
        // res.statusCode=403
            
            return res.status(403).send("not authorised with invalid token")
        }
    }
    next()

    
}
module.exports=app
