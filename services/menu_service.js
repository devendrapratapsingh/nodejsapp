const role_data = require('../data/menu')
const auth_service = require('./auth_service')
class Menu{

    static get_menu(token){
        var role = auth_service.get_role(token)
        var key = role +"_role"
        return role_data[key]

    }
}

module.exports = Menu