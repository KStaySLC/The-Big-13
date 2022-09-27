const Sequelize = require('sequelize');
require('dotenv').config();

let dbPass = process.env.DB_PASSWORD
if(dbPass === 'null'){
  dbPass = null
}

let sequelize;
console.log(typeof process.env.DB_PASSWORD);
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    dbPass,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
