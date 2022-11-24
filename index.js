let express = require('express')
const path = require('path')
let app = express()
const publicPath = path.resolve(__dirname, './public')
app.set('view engine', 'ejs')
app.use(express.static(publicPath))
// app.use(express.urlencoded({extended:false})); //Captura info x POST
// app.use(express.json()); // POST

// const methodOverride = require('method-override'); // PUT,DELETE
// app.use(methodOverride('_method')); // PUT,DELETE

// let productsRoutes = require('./src/routes/productsRoutes')
// app.use('/', productsRoutes)

app.get('/', (req,res)=>{
    res.send('Hola Mundo')
})

// const usersRoutes = require('./src/routes/usersRoutes')
// app.use('/', usersRoutes)

// const petshopRoutes = require('./src/routes/petshopRoutes')
// app.use('/', petshopRoutes)

app.listen(3000 || process.env.PORT, ()=>{
    console.log('Server listo');
})

