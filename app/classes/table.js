const {stringArrayToMap} = require('./helper.js');

class Row {
  constructor({columns, data}) {
    this.fieldsPos = stringArrayToMap(columns);
    this.data = data || [];
  }

  get columns() {
    return this.fieldsPos.id;
  }

  getField(col) {
    return (this.data || [])[(Number.isInteger(col) ? `${col}` : this.fieldsPos.key[col])];
  }
}

class Column extends Row {
  constructor(data) {
    super({
      columns: ['COLUMN_NAME', 'DATA_TYPE', 'DATA_LENGTH', 'DATA_PRECISION', 'DATA_SCALE', 'NULLABLE', 'DATA_DEFAULT'],
      data,
    });
  }
}

class Table extends Row {
  constructor(data) {
    super({
      columns: ['OWNER', 'OBJECT_NAME', 'OBJECT_TYPE'],
      data,
    });
  }
}

/*var col = new Column(['ZZZ', 'XXX', 'YYY']);
 console.log(col.getField(0));
 console.log(col.getField('DATA_TYPE'));

 var tbl = new Table();
 console.log(tbl.columns);*/
