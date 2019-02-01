const {columnsMapper, rowsMapper} = require('../util-auto-mapper');

((_m) => {

  const fn = (data) => {
    const {metaData, rows} = data;

    const {OWNER, TABLE_NAME, INDEX_NAME, UNIQUENESS, TABLESPACE_NAME, NUM_ROWS} = columnsMapper(metaData);

    let tr;
    return rows.reduce((p, r) => {
      [r[OWNER],r[TABLE_NAME],r[INDEX_NAME]].reduce((p2,c2,i2)=>{
        if(!p2[c2]) p2[c2]={};
        return p2[c2];
      }, p);

      p[r[OWNER]][r[TABLE_NAME]][r[INDEX_NAME]] = [r[UNIQUENESS], r[TABLESPACE_NAME], r[NUM_ROWS]];

      return p;
    }, {});
  };

  //console.log(fn(sampleData));

  _m.exports = {allIndexes: fn};
})(module);
