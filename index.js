let express = require('express')

let app = express()


app.listen(3000 || process.env.PORT, ()=>{
    console.log('Server listo');
})

app.get('/', (req, res) => {
    res.send('Hola Mundo')
})