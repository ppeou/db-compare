((_m) => {

  const colChar = '\t';
  const rowChar = '\n';

  const JSON2TABLE = (result) => {
    const {metaData, rows} = result;
    let [_table, _row] = [[], []];
    metaData.forEach(c => {_row.push(c.name);});
    _table.push(_row.join(colChar));
    rows.forEach(c => {_table.push(c.join(colChar));});
    return _table.join(rowChar);
  };

  const JSON2TABLE_ALL_SOURCES = (result) => {
    const {metaData, rows} = result;
    let [_table, _row, lastRow] = [[], [], null];
    let clob = [];
    metaData.forEach(c => {_row.push(c.name);});
    _table.push(_row.join(colChar));
    rows.forEach(c => {
      if(c[3] === 1) {
        if(clob.length > 0) {
          _row.push(clob.join(''));
          _table.push(_row.join(colChar));
        }
        _row = [];
        _row.push(c[0]);
        _row.push(c[1]);
        _row.push(c[2]);
        clob = [];
      }
      clob.push(c[4]);
      lastRow = c;
    });

    if(lastRow) {
      _row.push(clob.join(''));
      _table.push(_row.join(colChar));
    }

    return _table.join(rowChar);
  };

  _m.exports = {
    JSON2TABLE,
    JSON2TABLE_ALL_SOURCES,
  };
})(module);
