const db = require('../models');
const axios = require("axios");
const { axiosData } = require('../models');

// create main model
// const Product = db.products;
// const Review = db.reviews;
// const AxiosApi = db.axiosData;

// main work

// axios api call

module.exports.getAxiosApi = async (req, res) => {

    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((result) => {
            console.log(result.data);
            let info;

            const apiMap = result.data.map((obj) => {

                info = {
                    name: obj.name,
                    username: obj.username,
                    email: obj.email
                }

                console.log(info);

                axiosData.create(info);
            })
            // console.log(apiMap);
            res.status(200).send(info);

        })
        .catch((error) => {

            console.log(error);
        })
}
