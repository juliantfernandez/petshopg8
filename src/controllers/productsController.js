// let path = require('path');
// const fs = require('fs');
// const productsFilePath = path.join(__dirname, '../data/products.json')
// let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))
// products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))


let productsController = {
    home: (req, res) => {
        res.render('home');
    }
    
}

module.exports = productsController