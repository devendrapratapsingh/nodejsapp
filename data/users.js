const users=[
    {"admin":{"role":"admin"},"name":"Devendra"},
    {"guest":{"role":"view"},"name":"none"},
       
    ]

class User{
    static get_role(user){
        
        
        for(var index in users){
            console.log(index)
            if (user in users[index]){
                return users[index][user]["role"]
            }
        }
        return
    }
}    
module.exports = User