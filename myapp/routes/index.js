var express = require('express');
var router = express.Router();
const db = require('../database/database');

/* GET home page. */
router.get('/',async function(req, res, next) {
  const result = await db.getdata();
  console.log(result.rows);
  res.render('index', { resultData: result.rows });
});

router.get('/map',async function(req, res, next) {
  const result = await db.getsum();
  const result1 = await db.getmap();
  console.log(result.rows);
  console.log(result1.rows);
  res.render('map', { resultData: result.rows, mapData: result1.rows });
});
router.get('/graph',async function(req, res, next) {
  const result = await db.getdata();
  console.log(result.rows);
  res.render('graph', { resultData: result.rows });
});

module.exports = router;
