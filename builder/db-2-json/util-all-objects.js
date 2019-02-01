const {rowsMapper, columnsMapper} = require('../util-auto-mapper');

((_m) => {
  const sampleData = {
      metaData:
        [{name: 'OWNER'},
          {name: 'OBJECT_TYPE'},
          {name: 'OBJECT_NAME'},
          {name: 'STATUS'}],
      rows:
        [['EQU_DEV', 'TABLE', 'COUNTRY', 'VALID'],
          ['EQU_DEV', 'VIEW', 'COUNTRY_STATE', 'VALID'],
          ['EQU_DEV', 'FUNCTION', 'GET_NOW', 'INVALID'],
          ['EQU_DEV', 'TABLE', 'GLOBE', 'VALID'],
          ['EQU_DEV', 'VIEW', 'GLOBE_COUNTRY', 'VALID'],
          ['EQU_DEV', 'FUNCTION', 'NUM_TO_STR', 'VALID'],
          ['EQU_DEV', 'PROCEDURE', 'PRC_TODAY', 'VALID'],
          ['EQU_DEV', 'SEQUENCE', 'SEQ_COUNTRY_ID', 'VALID'],
          ['EQU_DEV', 'SEQUENCE', 'SEQ_GLOBE_ID', 'VALID'],
          ['EQU_DEV', 'SEQUENCE', 'SEQ_STATE_ID', 'VALID'],
          ['EQU_DEV', 'TABLE', 'STATE', 'VALID'],
          ['EQU_DEV', 'INDEX', 'STATE_ABBR_UINDEX', 'VALID'],
          ['EQU_DEV', 'INDEX', 'SYS_C007056', 'VALID'],
          ['EQU_DEV', 'INDEX', 'SYS_C007057', 'VALID'],
          ['EQU_DEV', 'INDEX', 'SYS_C007063', 'VALID']]
    }
  ;

  const fn = (data) => {
    const {metaData, rows} = data;

    const {OWNER, OBJECT_TYPE, OBJECT_NAME, STATUS} = columnsMapper(metaData);

    return rowsMapper([OWNER, OBJECT_TYPE, OBJECT_NAME, STATUS], rows);
  };

  //console.log(fn(sampleData));

  _m.exports = {allObjects: fn};
})(module);
