module.exports = {

    HOST: '43.205.211.186',
    USER: 'root',
    PASSWORD: 'Abdul@Ahad@Ansari@1234',
    DB: 'node_sequelize_api_db',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
