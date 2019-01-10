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
      'SELECT * FROM GLOBE',
      function (err, result) {
        if (err) {
          console.error(err);
          return;
        }
        console.log(result.rows);
      });
  });
