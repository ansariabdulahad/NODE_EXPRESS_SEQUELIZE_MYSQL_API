module.exports = (sequelize, DataTypes) => {

    const Review = sequelize.define("review", {
        rating: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        }
        // }, {
        // timestamps: false // it will stop the created and updated time stamp in db table
    })

    return Review;
}