const app=require('../app')
const auth_service = require('../services/auth_service')

app.post('/login',(req,res)=>{
    res.send(auth_service.login(req.body))
})