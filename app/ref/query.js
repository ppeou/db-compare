module.exports = {
  QUERY: {
    TABLES: `SELECT OWNER, OBJECT_NAME, OBJECT_TYPE FROM ALL_OBJECTS WHERE OWNER='[[owner]]'ORDER BY OBJECT_TYPE, OBJECT_NAME`,
    COLUMNS: `SELECT OWNER, TABLE_NAME, COLUMN_NAME, DATA_TYPE, DATA_LENGTH, DATA_PRECISION, DATA_SCALE, NULLABLE, DATA_DEFAULT FROM ALL_TAB_COLUMNS WHERE OWNER='[[owner]]'ORDER BY TABLE_NAME, COLUMN_NAME`,
    CONSTRAINTS: `SELECT OWNER, TABLE_NAME, CONSTRAINT_NAME, CONSTRAINT_TYPE, SEARCH_CONDITION, STATUS FROM ALL_CONSTRAINTS WHERE OWNER='[[owner]]'ORDER BY TABLE_NAME, CONSTRAINT_TYPE`,
  },
};