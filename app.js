let express = require('express')

let app = express()


app.listen(3000)

app.use('/', (req, res) => {
    res.send('Hola Mundo')
})