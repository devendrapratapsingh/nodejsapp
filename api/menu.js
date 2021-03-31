const app=require('../app')
const menu_service = require('../services/menu_service')

app.post('/menu',(req,res)=>{
    
    var menu = menu_service.get_menu(req.headers['token'])
    res.send(menu)
})