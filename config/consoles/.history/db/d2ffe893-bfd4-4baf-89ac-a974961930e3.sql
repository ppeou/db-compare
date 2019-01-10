alter session set current_schema = EQU_TST;
;-- -. . -..- - / . -. - .-. -.--
CREATE TABLE globe (
  id NUMBER(4) PRIMARY KEY,
  name VARCHAR2(15) NOT NULL,
  description VARCHAR2(15) NULL,
  created_on DATE DEFAULT (sysdate),
  created_by VARCHAR2(10) NOT NULL,
  updated_on DATE DEFAULT (sysdate),
  updated_by VARCHAR2(10) NOT NULL
  ) TABLESPACE equ_tbs_data;