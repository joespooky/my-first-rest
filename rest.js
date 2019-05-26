// setup application
let express = require('express')
let Res = require('express-resource')
let app = express()
app.use(express.json())

// register REST controllers
app.resource('products', require('./controllers/product'), {id: 'id'})
app.resource('locations', require('./controllers/location'), {id: 'id'})

// start application
app.listen(3000)
