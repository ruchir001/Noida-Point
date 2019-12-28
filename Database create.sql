CREATE SEQUENCE   "NP"  MINVALUE 1001 MAXVALUE 99999 INCREMENT BY 1 START WITH 1001 NOCACHE  ORDER  NOCYCLE
/
CREATE table npUsers(
    user_id     Number(5) NOT NULL,
    mailId    	VARCHAR2(20),
    password	Varchar2(20),
    name  VARCHAR2(20),
    contactNo    VARCHAR2(12),
    joiningDate	Varchar2 (10),
    role 		varchar2 (10),
    constraint  npUsers_PK primary key (user_id)
    )
/
CREATE TABLE  "CATEGORY" 
   (	"CATEGORY_ID" NUMBER NOT NULL ENABLE, 
	"NAME" VARCHAR2(40), 
	 CONSTRAINT "CATEGORY_PK" PRIMARY KEY ("CATEGORY_ID") ENABLE
   )
/
CREATE TABLE  "NOIDAINFO" 
   (	"INFO_ID" NUMBER NOT NULL ENABLE, 
	"CATEGORY_ID" NUMBER, 
	"DESCRIPTION" VARCHAR2(50), 
	"ADDRESS" VARCHAR2(70), 
	"CONTACTNO" VARCHAR2(12), 
	 CONSTRAINT "NOIDAINFO_PK" PRIMARY KEY ("INFO_ID") ENABLE
   )
/
CREATE table npClassified(
    addId Number(5) NOT NULL,
    user_id     Number(5) NOT NULL,
    address    	VARCHAR2(200),
    available	Varchar2(100),
    postDate  VARCHAR2(20),
    constraint  addId_PK primary key (addID)
    )
/
CREATE TABLE  "NPLINK" 
   (	"LINK_ID" NUMBER NOT NULL ENABLE, 
	    "SITENAME" VARCHAR2(40), 
	    "SITELINK" VARCHAR2(40), 
	   CONSTRAINT "LINK_PK" PRIMARY KEY ("LINK_ID") ENABLE
   )
/