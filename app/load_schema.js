const database1 = require('../app/classes/db_connection')(require('oracledb'),{
  user: 'equ_dev',
  password: 'equ_dev_pwd',
  connectString: 'localhost/XE',
});
const database2 = require('../app/classes/db_connection')(require('oracledb'),{
  user: 'equ_tst',
  password: 'equ_tst_pwd',
  connectString: 'localhost/XE',
});

async function init() {
  await database1.initialize();
  await database2.initialize();

  const {rows: rows1} = await database.simpleExecute(fillTemplate(QUERY.TABLES, {owner: 'EQU_DEV'}));
  rows1.forEach(r => console.log(r));

  const {rows: rows2} = await database2.simpleExecute(fillTemplate(QUERY.TABLES, {owner: 'EQU_TST'}));
  rows2.forEach(r => console.log(r));
}
init();

/*const database = require('../app/classes/db_connection');
const database2 = require('../app/classes/db_connection');
const {fillTemplate} = require('./classes/helper');
const {QUERY} = require('./ref/query');

async function init() {
 await database.initialize({
    user: 'equ_dev',
    password: 'equ_dev_pwd',
    connectString: 'localhost/XE',
  });
  await database2.initialize({
    user: 'equ_tst',
    password: 'equ_tst_pwd',
    connectString: 'localhost/XE',
  });
  const {rows: rows1} = await database.simpleExecute(fillTemplate(QUERY.TABLES, {owner: 'EQU_DEV'}));
  rows1.forEach(r => console.log(r));

  const {rows: rows2} = await database2.simpleExecute(fillTemplate(QUERY.TABLES, {owner: 'EQU_TST'}));
  rows2.forEach(r => console.log(r));
}

init();*/
