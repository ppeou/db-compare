const generateDB = (ora, dbConfig) => {
  const opt = {
    user: '',
    password: '',
    connectString: '',
    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0,
  };
  const config = Object.assign({}, opt, dbConfig)

  async function initialize() {
    await ora.createPool(config);
  }

  async function close() {
    await ora.getPool().close();
  }

  function simpleExecute(statement, binds = [], opts = {}) {
    return new Promise(async (resolve, reject) => {
      let conn;

      const _opts = Object.assign({}, {outFormat: ora.ARRAY, autoCommit: false}, opts );

      try {
        conn = await ora.getConnection();
        const result = await conn.execute(statement, binds, _opts);
        resolve(result);
      } catch (err) {
        reject(err);
      } finally {
        if (conn) {
          try {
            await conn.close();
          } catch (err) {
            console.log(err);
          }
        }
      }
    });
  }
};
/*
 console.log(new Date());
 var obj = {};

 const oracledb = require('oracledb');
 const opt = {
 user: '',
 password: '',
 connectString: '',
 poolMin: 10,
 poolMax: 10,
 poolIncrement: 0,
 };

async function initialize(dbConfig) {
  console.log(dbConfig);
  if(!obj.aa) obj.aa = oracledb;
  else {
    console.log('compare', obj.aa === oracledb);
  }
  await oracledb.createPool(Object.assign({}, opt, dbConfig));
}

async function close() {
  await oracledb.getPool().close();
}

function simpleExecute(statement, binds = [], opts = {}) {
  return new Promise(async (resolve, reject) => {
    let conn;

    const _opts = Object.assign({}, {outFormat: oracledb.ARRAY, autoCommit: false}, opts );

    try {
      conn = await oracledb.getConnection();
      const result = await conn.execute(statement, binds, _opts);
      resolve(result);
    } catch (err) {
      reject(err);
    } finally {
      if (conn) {
        try {
          await conn.close();
        } catch (err) {
          console.log(err);
        }
      }
    }
  });
}

module.exports = {
  initialize,
  close,
  simpleExecute,
};*/
