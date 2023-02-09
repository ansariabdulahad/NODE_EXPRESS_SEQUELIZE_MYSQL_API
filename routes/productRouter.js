// importing product and review controllers
const productController = require('../controllers/productController.js');
const reviewController = require('../controllers/reviewController.js');
const axiosController = require("../controllers/axiosController.js");

// router
const router = require('express').Router();

// axios api
router.get('/getAxios', axiosController.getAxiosApi);

// using routers
router.post('/addProduct', productController.addProduct);

router.get('/allProducts', productController.getAllProducts);

router.get('/published', productController.getPublishedProduct);

// review url and controller
router.post('/addReview', reviewController.addReview);
router.get('/allReview', reviewController.getAllReviews);

// get product Reviews
router.get('/getProductReviews', productController.getProductReviews);

// product router
router.get('/:id', productController.getOneProduct);

router.put('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);


// exporting
module.exports = router;