CREATE TABLE ABC
(
    COLUMN_1 INT DEFAULT 5 PRIMARY KEY NOT NULL,
    COLUMN_2 VARCHAR2(10),
    COLUMN_3 NUMBER DEFAULT 4
);
CREATE UNIQUE INDEX ABC_COLUMN_1_UINDEX ON ABC (COLUMN_1);

CREATE TABLE SAMPLE_TABLE_TEMPLATE
(
  COLUMN_1 NUMBER DEFAULT 5 NOT NULL PRIMARY KEY,
  COLUMN_2 VARCHAR2(10),
  COLUMN_3 NUMBER(5, 2) DEFAULT 4
)
/

CREATE TABLE ABC (
  ID NUMBER PRIMARY KEY USING INDEX TABLESPACE EQU_TBS_IDX,
  AGE NUMBER,
  GENDER VARCHAR2(1) DEFAULT '-' NOT NULL,
  CONSTRAINT CHK_GENDER CHECK (GENDER IN('M','F'))
  ,CONSTRAINT CHK_AGE_UNQ UNIQUE(AGE) USING INDEX TABLESPACE EQU_TBS_IDX -- THIS IS IN ALL_CONSTRAINTS TYPE U

) TABLESPACE EQU_TBS_DATA;


DROP TABLE ABC;

--------------------------------------------------------
--  File created - Thursday-January-31-2019
--------------------------------------------------------
DROP SEQUENCE "SEQ_COUNTRY_ID";
DROP SEQUENCE "SEQ_GLOBE_ID";
DROP SEQUENCE "SEQ_STATE_ID";
DROP TABLE "ABC" cascade constraints;
DROP TABLE "COUNTRY" cascade constraints;
DROP TABLE "GLOBE" cascade constraints;
DROP TABLE "SAMPLE_TABLE_TEMPLATE" cascade constraints;
DROP TABLE "STATE" cascade constraints;
DROP VIEW "COUNTRY_STATE";
DROP VIEW "GLOBE_COUNTRY";
DROP PROCEDURE "PRC_TODAY";
DROP FUNCTION "GET_NOW";
DROP FUNCTION "NUM_TO_STR";
--------------------------------------------------------
--  DDL for Sequence SEQ_COUNTRY_ID
--------------------------------------------------------

   CREATE SEQUENCE  "SEQ_COUNTRY_ID"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 21 CACHE 20 NOORDER  NOCYCLE
--------------------------------------------------------
--  DDL for Sequence SEQ_GLOBE_ID
--------------------------------------------------------

   CREATE SEQUENCE  "SEQ_GLOBE_ID"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 21 CACHE 20 NOORDER  NOCYCLE
--------------------------------------------------------
--  DDL for Sequence SEQ_STATE_ID
--------------------------------------------------------

   CREATE SEQUENCE  "SEQ_STATE_ID"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE
--------------------------------------------------------
--  DDL for Table ABC
--------------------------------------------------------

  CREATE TABLE "ABC"
   (	"ID" NUMBER,
	"AGE" NUMBER,
	"GENDER" VARCHAR2(1) DEFAULT '-'
   )
--------------------------------------------------------
--  DDL for Table COUNTRY
--------------------------------------------------------

  CREATE TABLE "COUNTRY"
   (	"ID" NUMBER,
	"NAME" VARCHAR2(20),
	"GLOBE_ID" NUMBER
   )
--------------------------------------------------------
--  DDL for Table GLOBE
--------------------------------------------------------

  CREATE TABLE "GLOBE"
   (	"ID" NUMBER,
	"NAME" VARCHAR2(15),
	"DESCRIPTION" VARCHAR2(100),
	"CREATED_ON" DATE DEFAULT (SYSDATE),
	"CREATED_BY" VARCHAR2(10),
	"UPDATED_ON" DATE DEFAULT (SYSDATE),
	"UPDATED_BY" VARCHAR2(10) DEFAULT NULL
   )
  GRANT ALTER, DELETE, INDEX, INSERT, SELECT, UPDATE, REFERENCES ON "GLOBE" TO "EQU_TST"
--------------------------------------------------------
--  DDL for Table SAMPLE_TABLE_TEMPLATE
--------------------------------------------------------

  CREATE TABLE "SAMPLE_TABLE_TEMPLATE"
   (	"COLUMN_1" NUMBER(*,0) DEFAULT 5,
	"COLUMN_2" VARCHAR2(10),
	"COLUMN_3" NUMBER(5,2) DEFAULT 4,
	"COLUMN_4" NUMBER(12,3) DEFAULT 100
   )

   COMMENT ON COLUMN "SAMPLE_TABLE_TEMPLATE"."COLUMN_3" IS 'hello'
--------------------------------------------------------
--  DDL for Table STATE
--------------------------------------------------------

  CREATE TABLE "STATE"
   (	"ID" NUMBER,
	"NAME" VARCHAR2(40),
	"ABBR" VARCHAR2(2),
	"CAPITAL" VARCHAR2(50) DEFAULT NULL,
	"COUNTRY_ID" NUMBER,
	"STATUS" VARCHAR2(1) DEFAULT '-'
   )

   COMMENT ON COLUMN "STATE"."ABBR" IS 'abbr comment goes here'
--------------------------------------------------------
--  DDL for View COUNTRY_STATE
--------------------------------------------------------

  CREATE OR REPLACE VIEW "COUNTRY_STATE" ("STATE_ID", "STATE_NAME", "COUTRY_ID", "COUNTRY_NAME") AS
  SELECT
	  S.ID AS STATE_ID, S.NAME AS STATE_NAME,
	  C.ID AS COUTRY_ID,  C.NAME AS COUNTRY_NAME
	FROM COUNTRY C
	INNER JOIN STATE S ON S.COUNTRY_ID = C.ID
--------------------------------------------------------
--  DDL for View GLOBE_COUNTRY
--------------------------------------------------------

  CREATE OR REPLACE VIEW "GLOBE_COUNTRY" ("GLOBE_ID", "GLOBE_NAME", "COUTRY_ID", "COUNTRY_NAME") AS
  SELECT
	  G.ID AS GLOBE_ID,  G.NAME AS GLOBE_NAME,
	  C.ID AS COUTRY_ID, C.NAME AS COUNTRY_NAME
	FROM GLOBE G
	INNER JOIN COUNTRY C ON C.GLOBE_ID = G.ID
--------------------------------------------------------
--  DDL for Index STATE_ABBR_UINDEX
--------------------------------------------------------

  CREATE UNIQUE INDEX "STATE_ABBR_UINDEX" ON "STATE" ("ABBR")
--------------------------------------------------------
--  DDL for Index CHK_AGE_UNQ
--------------------------------------------------------

  CREATE UNIQUE INDEX "CHK_AGE_UNQ" ON "ABC" ("AGE")
--------------------------------------------------------
--  DDL for Procedure PRC_TODAY
--------------------------------------------------------
set define off;

  CREATE OR REPLACE PROCEDURE "PRC_TODAY" AS
   BEGIN
      DBMS_OUTPUT.ENABLE();
      DBMS_OUTPUT.PUT_LINE('TODAY : ' || TO_CHAR(SYSDATE, 'MM-DD-YYYY'));   END;
--------------------------------------------------------
--  DDL for Function GET_NOW
--------------------------------------------------------

  CREATE OR REPLACE FUNCTION "GET_NOW" ()
   RETURN NVARCHAR2
   IS MY_VAR NVARCHAR2(100);
   BEGIN
      SELECT TO_CHAR(SYSDATE)
			INTO MY_VAR
      FROM DUAL;
      RETURN(MY_VAR);
    END;
--------------------------------------------------------
--  DDL for Function NUM_TO_STR
--------------------------------------------------------

  CREATE OR REPLACE FUNCTION "NUM_TO_STR" (NMB IN NUMBER)
   RETURN NVARCHAR2
   IS MY_VAR NVARCHAR2(100);
   BEGIN
      SELECT TO_CHAR(NMB)
			INTO MY_VAR
      FROM DUAL;
      RETURN(MY_VAR);
    END;
--------------------------------------------------------
--  Constraints for Table ABC
--------------------------------------------------------

  ALTER TABLE "ABC" ADD CONSTRAINT "CHK_AGE_UNQ" UNIQUE ("AGE") ENABLE
  ALTER TABLE "ABC" ADD PRIMARY KEY ("ID") ENABLE
  ALTER TABLE "ABC" ADD CONSTRAINT "CHK_GENDER" CHECK (GENDER IN('M','F')) ENABLE
  ALTER TABLE "ABC" MODIFY ("GENDER" NOT NULL ENABLE)
--------------------------------------------------------
--  Constraints for Table GLOBE
--------------------------------------------------------

  ALTER TABLE "GLOBE" ADD PRIMARY KEY ("ID") ENABLE
  ALTER TABLE "GLOBE" MODIFY ("CREATED_BY" NOT NULL ENABLE)
  ALTER TABLE "GLOBE" MODIFY ("NAME" NOT NULL ENABLE)
--------------------------------------------------------
--  Constraints for Table COUNTRY
--------------------------------------------------------

  ALTER TABLE "COUNTRY" ADD PRIMARY KEY ("ID") ENABLE
--------------------------------------------------------
--  Constraints for Table STATE
--------------------------------------------------------

  ALTER TABLE "STATE" ADD CONSTRAINT "STATE_CHK1" CHECK (STATUS IN ('A','B','C')) ENABLE
  ALTER TABLE "STATE" ADD PRIMARY KEY ("ID") ENABLE
--------------------------------------------------------
--  Constraints for Table SAMPLE_TABLE_TEMPLATE
--------------------------------------------------------

  ALTER TABLE "SAMPLE_TABLE_TEMPLATE" ADD PRIMARY KEY ("COLUMN_1") ENABLE
  ALTER TABLE "SAMPLE_TABLE_TEMPLATE" MODIFY ("COLUMN_1" NOT NULL ENABLE)


