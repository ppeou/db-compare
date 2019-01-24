((_m) => {

  const sql = [
    {
      outputfile: 'TABLES.json',
      sql: `SELECT OWNER, TABLE_NAME, TABLESPACE_NAME, NUM_ROWS 
            FROM ALL_TABLES WHERE OWNER='[[owner]]' ORDER BY TABLE_NAME`,
    },
    {
      outputfile: 'COLUMNS.json',
      sql: `SELECT OWNER, TABLE_NAME, COLUMN_NAME, DATA_TYPE, DATA_LENGTH, DATA_PRECISION, DATA_SCALE, NULLABLE, DATA_DEFAULT 
            FROM ALL_TAB_COLUMNS WHERE OWNER='[[owner]]' ORDER BY TABLE_NAME, COLUMN_NAME`,
    },
    {
      outputfile: 'CONSTRAINTS.json',
      sql: `SELECT OWNER, TABLE_NAME, CONSTRAINT_NAME, CONSTRAINT_TYPE, SEARCH_CONDITION, STATUS 
            FROM ALL_CONSTRAINTS WHERE TABLE_NAME NOT LIKE 'BIN$%' AND OWNER='[[owner]]' ORDER BY TABLE_NAME, CONSTRAINT_TYPE`,
    },
    {
      outputfile: 'INDEX_TABLESPACES.json',
      sql: `SELECT OWNER, INDEX_NAME, TABLESPACE_NAME, INDEX_TYPE, TABLE_OWNER, TABLE_NAME, UNIQUENESS 
            FROM ALL_INDEXES WHERE OWNER='[[owner]]'`,
    },
    {
      outputfile: 'GRANTS.json',
      sql: `SELECT OWNER, TABLE_NAME, GRANTOR, GRANTEE, SELECT_PRIV, INSERT_PRIV, DELETE_PRIV, UPDATE_PRIV, REFERENCES_PRIV, ALTER_PRIV, INDEX_PRIV 
            FROM TABLE_PRIVILEGES WHERE OWNER='[[owner]]' OR GRANTEE='[[owner]]' ORDER BY OWNER, GRANTOR, TABLE_NAME, GRANTEE`,
    },
    {
      outputfile: 'SEQUENCES.json',
      sql: `SELECT SEQUENCE_OWNER, SEQUENCE_NAME, MIN_VALUE, TO_CHAR(MAX_VALUE) AS MAX_VALUE, INCREMENT_BY, CYCLE_FLAG, ORDER_FLAG, CACHE_SIZE, LAST_NUMBER 
            FROM ALL_SEQUENCES WHERE SEQUENCE_OWNER='[[owner]]' ORDER BY SEQUENCE_NAME`,
    },
    {
      outputfile: 'VIEWS.json',
      sql: `SELECT OWNER, VIEW_NAME, TEXT FROM ALL_VIEWS 
            WHERE OWNER='[[owner]]' ORDER BY VIEW_NAME`,
    },
    {
      outputfile: 'SOURCES.json',
      sql: `SELECT OWNER, NAME, TYPE, LINE, TEXT 
            FROM ALL_SOURCE WHERE OWNER='[[owner]]' ORDER BY TYPE, NAME, LINE`,
      transformer: 'JSON2TABLE_ALL_SOURCES',
    },
  ];

  _m.exports = {
    PLSQL: sql,
  };

})(module);

/*{
  outputfile: '.json',
    sql: `
            WHERE OWNER='[[owner]]' ORDER BY VIEW_NAME`,
},*/
;

