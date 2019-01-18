//node util-generate-schema-info.js.js url=localhost/xe username=EQU_DEV password=equ_dev_pwd outputDir=../output/dev
//node util-generate-schema-info.js.js url=localhost/xe username=EQU_TST password=equ_tst_pwd outputDir=../output/tst

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
})();
