CREATE OR REPLACE FUNCTION GET_NOW()
   RETURN NVARCHAR2
   IS MY_VAR NVARCHAR2(100);
   BEGIN
      SELECT TO_CHAR(SYSDATE)
			INTO MY_VAR
      FROM DUAL;
      RETURN(MY_VAR);
    END;


    CREATE OR REPLACE FUNCTION NUM_TO_STR(NMB IN NUMBER)
   RETURN NVARCHAR2
   IS MY_VAR NVARCHAR2(100);
   BEGIN
      SELECT TO_CHAR(NMB)
			INTO MY_VAR
      FROM DUAL;
      RETURN(MY_VAR);
    END;

