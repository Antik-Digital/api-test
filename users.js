/* eslint-disable require-jsdoc */
const cnx = require('./cnx');
const mssql = require('mssql');


async function getUsers() {
  try {
    const sql = await mssql.connect(cnx);
    const result = await sql.request().query('SELECT * FROM USERS');
    return result.recordsets;
  } catch (err) {
    console.log(err);
  }
}

async function getUserById(id) {
  try {
    const sql = await mssql.connect(cnx);
    const result = await sql.request().query(
        `select * from Users WHERE id = ${id}`,
    );
    return result.recordsets;
  } catch (err) {
    console.log(err);
  }
}

async function getUserByUsername(username) {
  try {
    const sql = await mssql.connect(cnx);
    const result = await sql.request().query(
        `select * from Users WHERE Username = ${username}`,
    );
    console.log(result.recordset);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getUsers: getUsers,
  getUserById: getUserById,
  getUserByUsername: getUserByUsername,
};
