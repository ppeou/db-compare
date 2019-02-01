const {columnsMapper, rowsMapper} = require('../util-auto-mapper');

((_m) => {

  const templateCode = {
    'Y': 'GRANT [[action]] ON [[table]] TO [[user]];',
    'A': 'GRANT [[action]] ON [[table]] TO [[user]];',
    'G': 'GRANT [[action]] ON [[table]] TO [[user]] WITH GRANT OPTION;',
  };

  const fn = (data) => {
    const {metaData, rows} = data;

    const {TABLE_NAME, GRANTOR, GRANTEE, SELECT_PRIV, INSERT_PRIV, DELETE_PRIV, UPDATE_PRIV, REFERENCES_PRIV, ALTER_PRIV, INDEX_PRIV} = columnsMapper(metaData);

    let tr;
    return rows.reduce((p, r) => {
      [r[GRANTOR],r[TABLE_NAME],r[GRANTEE]].reduce((p2,c2,i2)=>{
        if(!p2[c2]) p2[c2]={};
        return p2[c2];
      }, p);

      p[r[OWNER]][r[TABLE_NAME]][r[INDEX_NAME]] = [r[UNIQUENESS], r[TABLESPACE_NAME], r[NUM_ROWS]];

      return p;
    }, {});
  };

  //console.log(fn(sampleData));

  _m.exports = {allAsGrantor: fn};
})(module);
