const {columnsMapper, rowsMapper} = require('../util-auto-mapper');

((_m) => {

  const fn = (data) => {
    const {metaData, rows} = data;

    const {OWNER, TABLE_NAME, CONSTRAINT_NAME, CONSTRAINT_TYPE, SEARCH_CONDITION, STATUS, INDEX_NAME} = columnsMapper(metaData);

    let tr;
    return rows.reduce((p, r) => {
      [r[OWNER],r[TABLE_NAME],r[CONSTRAINT_NAME]].reduce((p2,c2,i2)=>{
        if(!p2[c2]) p2[c2]={};
        return p2[c2];
      }, p);

      p[r[OWNER]][r[TABLE_NAME]][r[CONSTRAINT_NAME]] = [r[CONSTRAINT_TYPE], r[SEARCH_CONDITION], r[INDEX_NAME], r[STATUS], r[INDEX_NAME]];

      return p;
    }, {});
  };

  //console.log(fn(sampleData));

  _m.exports = {allConstraints: fn};
})(module);
