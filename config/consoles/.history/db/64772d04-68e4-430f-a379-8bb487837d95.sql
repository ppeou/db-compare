CREATE SCHEMA AUTHORIZATION db_dev;
;-- -. . -..- - / . -. - .-. -.--
CREATE SCHEMA AUTHORIZATION dbdev;
;-- -. . -..- - / . -. - .-. -.--
CREATE SCHEMA AUTHORIZATION dbdev identified by pwd1;
;-- -. . -..- - / . -. - .-. -.--
CREATE USER equ_dev
  IDENTIFIED BY equ_dev_pwd
  DEFAULT TABLESPACE equ_tbs_data
  TEMPORARY TABLESPACE equ_tbs_temp_01
  QUOTA 20M on equ_tbs_perm_01;
;-- -. . -..- - / . -. - .-. -.--
create tablespace equ_tbs_data
  logging
  datafile '/dbf1/equ_tbs_data.dbf' 
  size 32m 
  autoextend on 
  next 32m maxsize 2048m
  extent management local;
;-- -. . -..- - / . -. - .-. -.--
create tablespace equ_tbs_data
  logging
  datafile 'H:\oraclexe\app\oracle\oradata\XE\equ_tbs_data.dbf'
  size 10M
  autoextend on next 10M maxsize 2048M
  extent management local;
;-- -. . -..- - / . -. - .-. -.--
create temporary tablespace equ_tbs_temp
  tempfile 'H:\oraclexe\app\oracle\oradata\XE\equ_tbs_temp.dbf'
  size 10m
  autoextend on next 10m maxsize 2048m
  extent management local;
;-- -. . -..- - / . -. - .-. -.--
create tablespace equ_tbs_idx
  logging
  datafile 'H:\oraclexe\app\oracle\oradata\XE\equ_tbs_idx.dbf'
  size 10m
  autoextend on next 10m maxsize 2048m
  extent management local;
;-- -. . -..- - / . -. - .-. -.--
CREATE USER equ_dev
  IDENTIFIED BY equ_dev_pwd
  DEFAULT TABLESPACE equ_tbs_data
  TEMPORARY TABLESPACE equ_tbs_temp
  QUOTA 20M on equ_tbs_data;
;-- -. . -..- - / . -. - .-. -.--
GRANT create session TO equ_dev;
;-- -. . -..- - / . -. - .-. -.--
GRANT create table TO equ_dev;
;-- -. . -..- - / . -. - .-. -.--
GRANT create view TO equ_dev;
;-- -. . -..- - / . -. - .-. -.--
GRANT create any trigger TO equ_dev;
;-- -. . -..- - / . -. - .-. -.--
GRANT create any procedure TO equ_dev;
;-- -. . -..- - / . -. - .-. -.--
GRANT create sequence TO equ_dev;
;-- -. . -..- - / . -. - .-. -.--
CREATE USER equ_tst
  IDENTIFIED BY equ_tst_pwd
  DEFAULT TABLESPACE equ_tbs_data
  TEMPORARY TABLESPACE equ_tbs_temp
  QUOTA 20M on equ_tbs_data;
;-- -. . -..- - / . -. - .-. -.--
GRANT create session TO equ_tst;
;-- -. . -..- - / . -. - .-. -.--
GRANT create table TO equ_tst;
;-- -. . -..- - / . -. - .-. -.--
GRANT create view TO equ_tst;
;-- -. . -..- - / . -. - .-. -.--
GRANT create any trigger TO equ_tst;
;-- -. . -..- - / . -. - .-. -.--
GRANT create any procedure TO equ_tst;
;-- -. . -..- - / . -. - .-. -.--
GRANT create sequence TO equ_tst;