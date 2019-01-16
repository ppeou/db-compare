((_m) => {

  const oracledb = require('oracledb');

  async function getDb({url: connectString, username: user, password}) {
    const conn = await oracledb.getConnection({connectString, user, password});
    return conn;
  };

  _m.exports = {getDb};
})(module);
