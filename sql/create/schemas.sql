/* Permanent tablespace */
create tablespace equ_tbs_data
  logging
  datafile 'H:\oraclexe\app\oracle\oradata\XE\equ_tbs_data.dbf'
  size 10m
  autoextend on next 10m maxsize 2048m
  extent management local;

create tablespace equ_tbs_idx
  logging
  datafile 'H:\oraclexe\app\oracle\oradata\XE\equ_tbs_idx.dbf'
  size 10m
  autoextend on next 10m maxsize 2048m
  extent management local;

ALTER USER EQU_DEV QUOTA 10M ON EQU_TBS_IDX;
ALTER USER EQU_TST QUOTA 10M ON EQU_TBS_IDX;


/* Temporary tablespace */
create temporary tablespace equ_tbs_temp
  tempfile 'H:\oraclexe\app\oracle\oradata\XE\equ_tbs_temp.dbf'
  size 10m
  autoextend on next 10m maxsize 2048m
  extent management local;

/* Create User and Schema */
CREATE USER equ_dev
  IDENTIFIED BY equ_dev_pwd
  DEFAULT TABLESPACE equ_tbs_data
  TEMPORARY TABLESPACE equ_tbs_temp
  QUOTA 20M on equ_tbs_data;

GRANT create session TO equ_dev;
GRANT create table TO equ_dev;
GRANT create view TO equ_dev;
GRANT create any trigger TO equ_dev;
GRANT create any procedure TO equ_dev;
GRANT create sequence TO equ_dev;

/* Create User and Schema */
CREATE USER equ_tst
  IDENTIFIED BY equ_tst_pwd
  DEFAULT TABLESPACE equ_tbs_data
  TEMPORARY TABLESPACE equ_tbs_temp
  QUOTA 20M on equ_tbs_data;

GRANT create session TO equ_tst;
GRANT create table TO equ_tst;
GRANT create view TO equ_tst;
GRANT create any trigger TO equ_tst;
GRANT create any procedure TO equ_tst;
GRANT create sequence TO equ_tst;



 drop tablespace dft_tbs_data;
  drop tablespace dft_tbs_idx;
  drop tablespace dft_tbs_temp;

create tablespace dft_tbs_data
  logging
  datafile 'H:\oraclexe\app\oracle\oradata\XE\dft_tbs_data.dbf'
  size 10m
  autoextend on next 10m maxsize 40m
  extent management local;

create tablespace dft_tbs_idx
  logging
  datafile 'H:\oraclexe\app\oracle\oradata\XE\dft_tbs_idx.dbf'
  size 10m
  autoextend on next 10m maxsize 40m
  extent management local;

create temporary tablespace dft_tbs_temp
  tempfile 'H:\oraclexe\app\oracle\oradata\XE\dft_tbs_temp.dbf'
  size 10m
  autoextend on next 10m maxsize 40m
  extent management local;


CREATE USER equusr
  IDENTIFIED BY equusr_pwd
  DEFAULT TABLESPACE dft_tbs_data
  TEMPORARY TABLESPACE dft_tbs_temp
  QUOTA 20M on dft_tbs_data;

CREATE USER equ_ro IDENTIFIED BY equ_ro_pwd;
CREATE USER equ_rw IDENTIFIED BY equ_rw_pwd;

