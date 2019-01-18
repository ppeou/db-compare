((_m) => {

  const sql = [
    {
      outputfile: 'TABLES.csv',
      sql: `SELECT OWNER, TABLE_NAME, TABLESPACE_NAME, NUM_ROWS 
            FROM ALL_TABLES WHERE OWNER='[[owner]]' ORDER BY TABLE_NAME`,
    },
    {
      outputfile: 'COLUMNS.csv',
      sql: `SELECT OWNER, TABLE_NAME, COLUMN_NAME, DATA_TYPE, DATA_LENGTH, DATA_PRECISION, DATA_SCALE, NULLABLE, DATA_DEFAULT 
            FROM ALL_TAB_COLUMNS WHERE OWNER='[[owner]]' ORDER BY TABLE_NAME, COLUMN_NAME`,
    },
    {
      outputfile: 'CONSTRAINTS.csv',
      sql: `SELECT OWNER, TABLE_NAME, CONSTRAINT_NAME, CONSTRAINT_TYPE, SEARCH_CONDITION, STATUS 
            FROM ALL_CONSTRAINTS WHERE OWNER='[[owner]]' ORDER BY TABLE_NAME, CONSTRAINT_TYPE`,
    },
    {
      outputfile: 'INDEX_TABLESPACES.csv',
      sql: `SELECT OWNER, INDEX_NAME, TABLESPACE_NAME, INDEX_TYPE, TABLE_OWNER, TABLE_NAME, UNIQUENESS 
            FROM ALL_INDEXES WHERE OWNER='[[owner]]'`,
    },
    {
      outputfile: 'GRANTS.csv',
      sql: `SELECT OWNER, TABLE_NAME, GRANTOR, GRANTEE, SELECT_PRIV, INSERT_PRIV, DELETE_PRIV, UPDATE_PRIV, REFERENCES_PRIV, ALTER_PRIV, INDEX_PRIV 
            FROM TABLE_PRIVILEGES WHERE OWNER='[[owner]]' OR GRANTEE='[[owner]]' ORDER BY OWNER, GRANTOR, TABLE_NAME, GRANTEE`,
    },
    {
      outputfile: 'SEQUENCES.csv',
      sql: `SELECT SEQUENCE_OWNER, SEQUENCE_NAME, MIN_VALUE, TO_CHAR(MAX_VALUE) AS MAX_VALUE, INCREMENT_BY, CYCLE_FLAG, ORDER_FLAG, CACHE_SIZE, LAST_NUMBER 
            FROM ALL_SEQUENCES WHERE SEQUENCE_OWNER='[[owner]]' ORDER BY SEQUENCE_NAME`,
    },
    {
      outputfile: 'VIEWS.csv',
      sql: `SELECT OWNER, VIEW_NAME, TEXT FROM ALL_VIEWS 
            WHERE OWNER='[[owner]]' ORDER BY VIEW_NAME`,
    },
    {
      outputfile: 'SOURCES.csv',
      sql: `SELECT T.OWNER, T.NAME, T.TYPE, TO_CLOB(DBMS_METADATA.GET_DDL(T.TYPE, T.NAME)) AS TEXT
            FROM (SELECT DISTINCT OWNER, NAME, TYPE FROM ALL_SOURCE WHERE OWNER='[[owner]]') T ORDER BY T.NAME, T.TYPE`,
    },
  ];

  _m.exports = {
    PLSQL: sql,
  };

})(module);

/*{
  outputfile: '.csv',
    sql: `
            WHERE OWNER='[[owner]]' ORDER BY VIEW_NAME`,
},*/
;

