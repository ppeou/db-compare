const fse = require('fs-extra');

((_m)=>{
  const executeQuery = (db, sql, outputfile) => {
    db.execute(sql, (err, r)=> {
      console.log(r);
      fse.writeJsonSync(outputfile, r);
    });
  };

  _m.exports = {
    executeQuery,
  };
})(module);
