const db = require('../models');

// models
const Review = db.reviews;

// functions

// 1. Add Reviews

const addReview = async (req, res) => {

    let data = {

        rating: req.body.rating,
        description: req.body.description,
        product_id: req.body.product_id
    }

    const review = await Review.create(data);
    res.status(200).send(review);
}


//2. get all reviews

const getAllReviews = async (req, res) => {

    const reviews = await Review.findAll({});
    res.status(200).send(reviews);
}

// exports all

module.exports = {

    addReview,
    getAllReviews
}