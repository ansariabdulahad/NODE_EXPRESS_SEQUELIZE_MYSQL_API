const db = require("../models");

const Product = db.products;

module.exports = class ProductService {

    async addProduct(data) {

        try {

            await Product.create(data);

        } catch (error) {

            console.log(error);
        }
    }
}
