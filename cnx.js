const cnx = {
  user: 'sa',
  password: 'MyPass@word',
  server: 'localhost',
  database: 'ApiTest',
  options: {
    trustedconnection: true,
    enableArithAbort: true,
    encrypt: true,
    trustServerCertificate: true,
  },
};

module.exports = cnx;
