let path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/products.json')
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))



let productsController = {
    index: (req, res) => {
        // products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))
        res.render('index');
    }
    
}

module.exports = productsController