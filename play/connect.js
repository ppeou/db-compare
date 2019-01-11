const database = require('../app/classes/db_connection');

async function def() {
  await database.initialize();
  const result = await database.simpleExecute('select user, systimestamp from dual');
  console.log(result);
  await database.close();
}
def();
