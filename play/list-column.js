const oracledb = require('oracledb');
oracledb.getConnection(
  {
    user: "equ_dev",
    password: "equ_dev_pwd",
    connectString: "localhost/XE"
  },
  function (err, connection) {
    if (err) {
      console.error(err);
      return;
    }
    connection.execute(
      `SELECT OWNER, TABLE_NAME, COLUMN_NAME,
          DATA_TYPE, DATA_LENGTH, DATA_PRECISION, DATA_SCALE,
          NULLABLE, DEFAULT_LENGTH, DATA_DEFAULT
        FROM SYS.ALL_TAB_COLUMNS WHERE TABLE_NAME='GLOBE'`,
        //`SELECT COLUMN_NAME FROM SYS.USER_TAB_COLUMNS WHERE TABLE_NAME='GLOBE'`,
      function (err, result) {
        if (err) {
          console.error(err);
          return;
        }
        console.log(result.rows);
      });
  });
