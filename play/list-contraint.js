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
      'SELECT OWNER, TABLE_NAME, CONSTRAINT_NAME, CONSTRAINT_TYPE, SEARCH_CONDITION, STATUS  FROM ALL_CONSTRAINTS WHERE OWNER=\'EQU_DEV\' ORDER BY TABLE_NAME, CONSTRAINT_TYPE',
      function (err, result) {
        if (err) {
          console.error(err);
          return;
        }
        console.log(result.rows);
      });
  });
