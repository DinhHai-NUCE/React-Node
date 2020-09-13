var express = require('express');
var router = express.Router();

const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'product',
  password: 'dung2205',
  port: 5432,
})

router.get('/', function (req, res, next) { })

// api get data from postgresql
router.get('/getData01', function (req, res, next) {

  //get data
  pool.query('SELECT * FROM product_info', (err, response) => {
    if (err) {
      console.log(err)
    } else {
      res.send(response.rows)   //hien thi du lieu len UI
    }

  })
})

router.get('/add', function (req, res, next) {
  res.render('add', {})
})

router.post('/add', function (req, res, next) {
  let product_name = req.body.product_name,
    product_price = req.body.product_price,
    image = req.body.image;

  pool.query("insert into product_info (product_name, product_price, image) values($1, $2, $3)",
    [product_name, product_price, image], (error, response) => {
      if (error) {
        res.send(error)
      } else {
        res.send(product_name + product_price + image)
      }
    })
})

module.exports = router;
