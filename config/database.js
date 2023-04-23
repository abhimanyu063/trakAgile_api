const { createPool } = require("mysql");

const pool = createPool({
    host: '45.90.109.227',
    user: 'root',
    password: 'TrakAgile@1234',
    database: 'dbTrakAgile',
    connectionLimit: 10,
    port: 3306
});
module.exports = pool;
