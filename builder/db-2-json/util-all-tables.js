const {columnsMapper, rowsMapper} = require('../util-auto-mapper');

((_m) => {

  const fn = (data) => {
    const {metaData, rows} = data;

    const {OWNER, TABLE_NAME, TABLESPACE_NAME, NUM_ROWS} = columnsMapper(metaData);

    let tr;
    return rows.reduce((p, r) => {
      if (!p[r[OWNER]]) {p[r[OWNER]] = {};}
      if (!p[r[OWNER]][r[TABLE_NAME]]) {p[r[OWNER]][r[TABLE_NAME]] = {};}

      p[r[OWNER]][r[TABLE_NAME]] = [r[TABLESPACE_NAME], r[NUM_ROWS]];

      return p;
    }, {});
  };

  //console.log(fn(sampleData));

  _m.exports = {allTables: fn};
})(module);
