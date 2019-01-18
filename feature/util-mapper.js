((_m)=> {

  const structure = {
    schema: {tables: {}, synonyms:{}},
    table: {columns: {}, indexes: {}, constraint: {}, tablespace: {}},
    column: {data: {type: null, length: null, precision: null, scale: null}},
    index: {tablespace: null, uniqueness: null,},
    constraint: {type: null, search_condition: null, status: null, delete_rule: null, index_name: null,}
  };

  const createSchema = (name) => {
    console.log(Object.assign);
    const obj = {[name]: Object.assign({}, structure.schema)};
    return obj;
  };

  console.log(createSchema('aa'));

 // _m.exports = {createSchema};
})(module);
