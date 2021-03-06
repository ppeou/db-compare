CREATE TABLE EQU_TST.GLOBE (
  ID NUMBER(4) PRIMARY KEY,
  NAME VARCHAR2(15) NOT NULL,
  DESCRIPTION VARCHAR2(100) NULL,
  CREATED_ON DATE DEFAULT (SYSDATE),
  CREATED_BY VARCHAR2(10) NOT NULL
  ) TABLESPACE EQU_TBS_DATA;


CREATE TABLE EQU_TST.COUNTRY (
  ID NUMBER PRIMARY KEY  USING INDEX TABLESPACE EQU_TBS_IDX,
  NAME VARCHAR2(22),
  GLOBE_ID NUMBER
);


CREATE TABLE EQU_TST.STATE (
  ID NUMBER PRIMARY KEY,
  NAME VARCHAR2(40),
  ABBR VARCHAR2(2),
  CAPITAL VARCHAR2(2),
  COUNTRY_ID NUMBER
);

  ----------------------------------------------

CREATE TABLE EQU_DEV.GLOBE (
  ID NUMBER PRIMARY KEY USING INDEX TABLESPACE EQU_TBS_IDX,
  NAME VARCHAR2(15) NOT NULL,
  DESCRIPTION VARCHAR2(100) NULL,
  CREATED_ON DATE DEFAULT (SYSDATE),
  CREATED_BY VARCHAR2(10) NOT NULL,
  UPDATED_ON DATE DEFAULT (SYSDATE),
  UPDATED_BY VARCHAR2(10) NOT NULL
  ) TABLESPACE EQU_TBS_DATA;

CREATE TABLE EQU_DEV.COUNTRY (
  ID NUMBER PRIMARY KEY  USING INDEX TABLESPACE EQU_TBS_IDX,
  NAME VARCHAR2(20),
  GLOBE_ID NUMBER
) TABLESPACE EQU_TBS_DATA;

ALTER TABLE COUNTRY
ADD CONSTRAINT FK_COUNTRY_GLOBAL
  FOREIGN KEY (GLOBE_ID)
  REFERENCES GLOBE(ID);

CREATE TABLE EQU_DEV.STATE (
  ID NUMBER PRIMARY KEY  USING INDEX TABLESPACE EQU_TBS_IDX,
  NAME VARCHAR2(40),
  ABBR VARCHAR2(2),
  CAPITAL VARCHAR2(2),
  COUNTRY_ID NUMBER
) TABLESPACE EQU_TBS_DATA;

ALTER TABLE STATE
ADD CONSTRAINT FK_STATE_COUNTRY
  FOREIGN KEY (COUNTRY_ID)
  REFERENCES COUNTRY(ID);
--------------------------
CREATE SEQUENCE SEQ_GLOBE_ID START WITH 1;
CREATE SEQUENCE SEQ_COUNTRY_ID START WITH 1;
CREATE SEQUENCE SEQ_STATE_ID START WITH 1;
---------------------------------------------------------------
GRANT SELECT ON EQU_DEV.GLOBE TO EQU_TST;
GRANT INSERT ON EQU_DEV.GLOBE TO EQU_TST;
GRANT DELETE ON EQU_DEV.GLOBE TO EQU_TST;
GRANT UPDATE ON EQU_DEV.GLOBE TO EQU_TST;
GRANT REFERENCES ON EQU_DEV.GLOBE TO EQU_TST;
GRANT ALTER ON EQU_DEV.GLOBE TO EQU_TST;
GRANT INDEX ON EQU_DEV.GLOBE TO EQU_TST;
--------------------------------------------------------------
INSERT INTO GLOBE (ID, NAME, DESCRIPTION, CREATED_BY, CREATED_ON) VALUES (SEQ_GLOBE_ID.NEXTVAL, 'Mercury', 'Swift Planet', 'me', SYSDATE);
INSERT INTO GLOBE (ID, NAME, DESCRIPTION, CREATED_BY, CREATED_ON) VALUES (SEQ_GLOBE_ID.NEXTVAL, 'Venus', 'Morning/ Evening Star, Brighter Planet, Earths Twin', 'me', SYSDATE);
INSERT INTO GLOBE (ID, NAME, DESCRIPTION, CREATED_BY, CREATED_ON) VALUES (SEQ_GLOBE_ID.NEXTVAL, 'Earth', 'Blue Planet, Living Planet', 'me', SYSDATE);
INSERT INTO GLOBE (ID, NAME, DESCRIPTION, CREATED_BY, CREATED_ON) VALUES (SEQ_GLOBE_ID.NEXTVAL, 'Mars', 'Red Planet', 'me', SYSDATE);
INSERT INTO GLOBE (ID, NAME, DESCRIPTION, CREATED_BY, CREATED_ON) VALUES (SEQ_GLOBE_ID.NEXTVAL, 'Jupiter', 'Giant Planet', 'me', SYSDATE);
INSERT INTO GLOBE (ID, NAME, DESCRIPTION, CREATED_BY, CREATED_ON) VALUES (SEQ_GLOBE_ID.NEXTVAL, 'Saturn', 'Ringed Planet, Beautiful Planet', 'me', SYSDATE);
INSERT INTO GLOBE (ID, NAME, DESCRIPTION, CREATED_BY, CREATED_ON) VALUES (SEQ_GLOBE_ID.NEXTVAL, 'Uranus', 'Ice Giant, Green Planet and Lying Planet', 'me', SYSDATE);
INSERT INTO GLOBE (ID, NAME, DESCRIPTION, CREATED_BY, CREATED_ON) VALUES (SEQ_GLOBE_ID.NEXTVAL, 'Neptune', 'Big Blue Planet', 'me', SYSDATE);
