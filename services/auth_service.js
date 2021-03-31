const jwt = require('jsonwebtoken');
const config = require('../config')
const User = require('../data/users')
class AuthService{

    static login(credentials){
        if(credentials.username === "admin" && credentials.password==="admin"){
            var role = User.get_role(credentials.username)
            return this.generate_token(credentials.username, role);
        }
        return false

    }

    static generate_token(username, role){
        return jwt.sign({"username":username, "role":role },config.TOKEN_SECRET,{expiresIn: '1d'})
    }

    static validate_token(token){
        try{
            
            return jwt.verify(token,config.TOKEN_SECRET);
        }catch(JsonWebTokenError){
          return false
        } 
    }
    static get_role(token){
        var data =  jwt.verify(token,config.TOKEN_SECRET);
        console.log(data)
        return data.role
    }
}

module.exports = AuthService