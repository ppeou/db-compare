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

  _m.exports = {
    JSON2TABLE,
  };
})(module);
