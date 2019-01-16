const {args, fillTemplate} = require('./util-args.js');
const {getDb} = require('./util-db.js');
const {PLSQL} = require('./util-pl.js');
const {executeQuery} = require('./util-write-file.js');
var path = require("path");
const fse = require('fs-extra');
const {url, username, password, outputDir} = args;

(async () => {
  const outputFolder = path.resolve(outputDir);
  console.log(`creating directory ${outputFolder}`);
  fse.emptydirSync(outputDir);

  console.log(`Connecting to database ${username}@${url}`);

  const db = await getDb({url, username, password});

  PLSQL.forEach(i => {
    const {sql, outputfile} = i;
    const _output = path.resolve(outputDir,outputfile);
    const asql = fillTemplate(sql, {owner: username});
    executeQuery(db, asql, _output);
  });




  /*db.execute(`SELECT COLUMN_NAME FROM SYS.USER_TAB_COLUMNS WHERE TABLE_NAME='GLOBE'`, (err, r)=> {
    console.log(r);
  });*/

})();
/*
async function  aaa() {
  const db = await getDb({url, username, password});
  console.log(db);
  db.execute(`SELECT COLUMN_NAME FROM SYS.USER_TAB_COLUMNS WHERE TABLE_NAME='GLOBE'`, (err, r)=> {
    console.log(r);
  });
}

aaa();
*/
