var express = require('express');
var router = express.Router();

router.all('/*', function(req, res, next) {
    res.app.locals.layout = 'home';
    next();
})
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home/index', { title: 'Home Page' });
});
router.get('/gifts', function(req, res, next) {
    res.render('home/gifts', { title: 'product Page' });
});

router.get('/about', function(req, res, next) {
    res.render('home/about', { title: 'about Page' });
});
router.get('/contact', function(req, res, next) {
    res.render('home/contact', { title: 'Contact Page' });
});
router.get('/shop', function(req, res, next) {
    res.render('home/shop', { title: 'product-detail Page' });
});

module.exports = router;