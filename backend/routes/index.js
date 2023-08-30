var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/artistName/:artistName', (req, res, next) => {
  console.log('*** artistName - ', req.params.artistName);

  res.json({ data: artistName });
})

module.exports = router;
