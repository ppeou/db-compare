//node util-build.js url=localhost/xe username=EQU_DEV password=equ_dev_pwd owner=EQU_DEV outputDir=../output/temp
const {args, fillTemplate} = require('../feature/util-args.js');
const {getDb} = require('../feature/util-db.js');
const {allObjects} = require('./db-2-json/util-all-objects');
const {allTables} = require('./db-2-json/util-all-tables');
const {allTableColumns} = require('./db-2-json/util-all-table-columns');
const {allConstraints} = require('./db-2-json/util-all-constraints');
const {allIndexes} = require('./db-2-json/util-all-indexes');
const {allAsGrantor} = require('./db-2-json/util-all-as-grantor');
//allAsGrantor

var path = require("path");
const fse = require('fs-extra');
const {url, username, password, outputDir, owner} = args;

const SQL_ALL_OBJECTS = `SELECT OWNER, OBJECT_TYPE, OBJECT_NAME, STATUS
                          FROM ALL_OBJECTS
                          WHERE OWNER='${owner}'
                          ORDER BY OWNER, OBJECT_TYPE, OBJECT_NAME`;
const SQL_ALL_TABLES = `SELECT OWNER, TABLE_NAME, TABLESPACE_NAME, NUM_ROWS
                        FROM ALL_TABLES
                        WHERE OWNER='${owner}'
                        ORDER BY OWNER, TABLE_NAME`;

const SQL_ALL_TAB_COLUMNS = `SELECT OWNER, TABLE_NAME, COLUMN_NAME, DATA_TYPE, DATA_LENGTH, DATA_PRECISION, DATA_SCALE, NULLABLE, COLUMN_ID, DATA_DEFAULT
                            FROM ALL_TAB_COLUMNS
                            WHERE OWNER='${owner}'
                            ORDER BY TABLE_NAME, COLUMN_NAME`;
const SQL_ALL_CONSTRAINTS = `SELECT OWNER, TABLE_NAME, CONSTRAINT_NAME, CONSTRAINT_TYPE, SEARCH_CONDITION, STATUS, INDEX_NAME
                              FROM ALL_CONSTRAINTS
                              WHERE OWNER='${owner}'
                                    AND TABLE_NAME NOT LIKE 'BIN$%'
                                    AND CONSTRAINT_NAME NOT LIKE 'BIN$%'
                              ORDER BY OWNER, TABLE_NAME, CONSTRAINT_TYPE`;

const SQL_ALL_INDEXES = `SELECT OWNER, TABLE_NAME, INDEX_NAME, UNIQUENESS, TABLESPACE_NAME, NUM_ROWS
                          FROM ALL_INDEXES
                          WHERE OWNER='${owner}'
                          ORDER BY OWNER, TABLE_TYPE, TABLE_NAME, INDEX_NAME`;

const SQL_AS_GRANTOR = `SELECT OWNER, TABLE_NAME, GRANTOR, GRANTEE, SELECT_PRIV, INSERT_PRIV, DELETE_PRIV, UPDATE_PRIV, REFERENCES_PRIV, ALTER_PRIV, INDEX_PRIV
                        FROM TABLE_PRIVILEGES
                        WHERE OWNER='${owner}'
                          AND GRANTOR='${owner}'
                        ORDER BY OWNER, GRANTOR, TABLE_NAME, GRANTEE`;

(async () => {
  const db = await getDb({url, username, password});

  const outputFolder = path.resolve(outputDir);
  console.log(`creating directory ${outputFolder}`);
  fse.emptydirSync(outputDir);

  db.execute(SQL_ALL_OBJECTS, (err, r) => {
    fse.writeFileSync(`${outputFolder}/all-objects.json`, JSON.stringify((allObjects(r))));
  });
  db.execute(SQL_ALL_TABLES, (err, r) => {
    fse.writeFileSync(`${outputFolder}/all-tables.json`, JSON.stringify((allTables(r))));
  });
  db.execute(SQL_ALL_TAB_COLUMNS, (err, r) => {
    fse.writeFileSync(`${outputFolder}/all-table-columns.json`, JSON.stringify((allTableColumns(r))));
  });
  db.execute(SQL_ALL_CONSTRAINTS, (err, r) => {
    fse.writeFileSync(`${outputFolder}/all-constraints.json`, JSON.stringify((allConstraints(r))));
  });
  db.execute(SQL_ALL_INDEXES, (err, r) => {
    fse.writeFileSync(`${outputFolder}/all-indexes.json`, JSON.stringify((allIndexes(r))));
  });
  db.execute(SQL_AS_GRANTOR, (err, r) => {
    fse.writeFileSync(`${outputFolder}/all-as-grantor.json`, JSON.stringify((allAsGrantor(r))));
  });

})();
