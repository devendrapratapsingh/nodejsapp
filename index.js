require('./api/auth')
const app = require('./app')

require('./api/menu')
const port=4000
app.listen(port,()=>{
    console.log("listenign on "+ port)
})