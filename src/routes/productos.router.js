const express = require ('express');
const router = express.Router();

router.get('/productos', (req, res) =>{
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => console.log(data));
});

module.exports = router;