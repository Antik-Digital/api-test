const cnx = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  server: process.env.DB_HOST,
  database: process.env.DB_NAME,
  options: {
    trustedconnection: true,
    enableArithAbort: true,
    encrypt: true,
    trustServerCertificate: true,
  },
};

module.exports = cnx;
