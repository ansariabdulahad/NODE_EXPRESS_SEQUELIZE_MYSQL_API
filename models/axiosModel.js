module.exports = (sequelize, DataTypes) => {

    const axiosData = sequelize.define("AxiosData", {

        name: {
            type: DataTypes.STRING
        },
        username: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        }
    })

    return axiosData;
}