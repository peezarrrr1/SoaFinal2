var express = require('express');
var router = express.Router();
const db = require('../database/database');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const result = await db.getAllCountry();
  const confirmed = await db.getAllConfirmed();

  let objectCountry = [];
  for (const key in result.rows) {
    objectCountry[key] = {
      state:result.rows[key].state,
      country:result.rows[key].country,
      confirmed:confirmed.rows[key].confirmed,
    }
  }
  res.render('index', { countrys: objectCountry});
});
router.get('/map', async function(req, res, next) {
  const totalConfirmed = await db.getTotalConfirm();
  const totalRecovered = await db.getTotalRecovered();
  const totalDeath = await db.getTotalDeath();
  const getLatLong = await db.getLatLong();

  const objectTotal = {
      totalConfirmed: totalConfirmed.rows[0].confirmed,
      totalRecovered: totalRecovered.rows[0].recovered,
      totalDeath: totalDeath.rows[0].death
  }
  res.render('map', { totalObject: objectTotal, Maps: getLatLong.rows });
});
module.exports = router;
