const fse = require('fs-extra');
const TFM = require('./util-json-to-table.js');

((_m)=>{
  const executeQuery = (db, sql, outputfile, transformer) => {
    console.log(`  executing ${sql}`);
    const fnTFM = transformer ? TFM[transformer] : TFM.JSON2TABLE;
    db.execute(sql, (err, r) => {
      console.log(`    writing to file ${outputfile}`);
      //fse.writeFileSync(outputfile, fnTFM(r));
      fse.writeFileSync(outputfile, JSON.stringify(r));
    });
  };

  _m.exports = {
    executeQuery,
  };
})(module);
