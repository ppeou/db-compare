((_m) => {
  const sampleHeader = [0, 1, 2, 3];
  const sampleRows = [['EQU_DEV', 'FUNCTION', 'GET_NOW', 'INVALID'],
    ['EQU_DEV', 'FUNCTION', 'NUM_TO_STR', 'VALID'],
    ['EQU_DEV', 'INDEX', 'STATE_ABBR_UINDEX', 'VALID'],
    ['EQU_DEV', 'INDEX', 'SYS_C007056', 'VALID'],
    ['EQU_DEV', 'INDEX', 'SYS_C007057', 'VALID'],
    ['EQU_DEV', 'INDEX', 'SYS_C007063', 'VALID'],
    ['EQU_DEV', 'PROCEDURE', 'PRC_TODAY', 'VALID'],
    ['EQU_DEV', 'SEQUENCE', 'SEQ_COUNTRY_ID', 'VALID'],
    ['EQU_DEV', 'SEQUENCE', 'SEQ_GLOBE_ID', 'VALID'],
    ['EQU_DEV', 'SEQUENCE', 'SEQ_STATE_ID', 'VALID'],
    ['EQU_DEV', 'TABLE', 'COUNTRY', 'VALID'],
    ['EQU_DEV', 'TABLE', 'GLOBE', 'VALID'],
    ['EQU_DEV', 'TABLE', 'STATE', 'VALID'],
    ['EQU_DEV', 'VIEW', 'COUNTRY_STATE', 'VALID'],
    ['EQU_DEV', 'VIEW', 'GLOBE_COUNTRY', 'VALID']];

  const autoAdd = (p, arr, mapper) => {
    if (mapper.length > 0) {
      const i = mapper.shift();
      p[arr[i]] = autoAdd(p[arr[i]] || {}, arr, mapper);
    }
    return p;
  };

  const rowsMapper = (header, rows) => {
    return rows.reduce((p, r, i) => {
      return autoAdd(p, r, header.slice());
    }, {});
  };
  const columnsMapper = (r) => {
    return r.reduce((p, c, i) => {
      p[c.name] = i;
      return p;
    }, {});
  };

  //console.log(rowsMapper(sampleHeader, sampleRows));
  _m.exports = {rowsMapper, columnsMapper};

})(module);
