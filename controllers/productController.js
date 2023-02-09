const db = require('../models');
const axios = require("axios");
const ProductService = require("../services/productService.js");

// create main model
const Product = db.products;
const Review = db.reviews;

// main work

// 1. create product

const addProduct = async (req, res) => {

    try {
        console.log("Query Id : ", req.query.id);

        let info = {
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            published: req.body.published ? req.body.published : false
        }

        const product = new ProductService;
        product.addProduct(info);
        console.log(info);
        return res.status(200).send(info);

    } catch (error) {

        console.log(error);
    }
}

// 2. get all products

const getAllProducts = async (req, res) => {

    try {

        console.log("Query Id : ", req.query.id);
        let limit = parseInt(req.query.limit);
        let offset = parseInt(req.query.offset);
        let products;

        if (limit && offset) {
            products = await Product.findAll({
                offset: offset,
                limit: limit
            });
        }
        else {
            products = await Product.findAll({});
        }
        // console.log(limit);
        // console.log(offset);
        return res.status(200).send(products);

    } catch (error) {

        // console.log(error);
        return res.status(400).send(error);
    }
}

// 3. get single product

const getOneProduct = async (req, res) => {

    try {

        console.log("Query Id: ", req.query.id);

        let id = req.params.id;
        let product = await Product.findOne({ where: { id: id } })
        return res.status(200).send(product);

    } catch (error) {

        console.log(error);
    }
}

// 4. get single product

const updateProduct = async (req, res) => {

    try {

        // console.log("Query Id : ", req.query.id);

        let id = req.params.id;

        const product = await Product.update(req.body, { where: { id: id } })

        return res.status(200).send(product);

    } catch (error) {

        console.log(error);
    }
}

// 5. delete product by id

const deleteProduct = async (req, res) => {

    try {

        // console.log("Query Id: ", req.query.id);

        let id = req.params.id;

        await Product.destroy({ where: { id: id } })

        return res.status(200).send('Product is deleted !');

    } catch (error) {

        console.log(error);
    }
}

// 6. get published product

const getPublishedProduct = async (req, res) => {

    try {

        console.log("Query Id: ", req.query.id);

        const products = await Product.findAll({ where: { published: true } })

        return res.status(200).send(products);

    } catch (error) {

        console.log(error);
    }
}

// 7. connect one to many relation between product and review

const getProductReviews = async (req, res) => {

    try {

        console.log("Query Id: ", req.query.id);

        const data = await Product.findAll({
            include: [{
                model: Review,
                as: 'review'
            }],
            where: { id: req.query.id }
        })

        return res.status(200).send(data);

    } catch (error) {

        console.log(error);
    }
}

// export all
module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct,
    getProductReviews,
}