const fse = require('fs-extra');
const {JSON2TABLE} = require('./util-json-to-table.js');

((_m)=>{
  const executeQuery = (db, sql, outputfile) => {
    console.log(`  executing ${sql}`);
    db.execute(sql, (err, r) => {
      console.log(`    writing to file ${outputfile}`);
      //fse.writeJsonSync(outputfile, JSON2TABLE(r));
      fse.writeFileSync(outputfile, JSON2TABLE(r));
    });
  };

  _m.exports = {
    executeQuery,
  };
})(module);
