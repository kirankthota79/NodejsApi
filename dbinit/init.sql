CREATE DATABASE IF NOT EXISTS patientdb;
use patientdb;
DROP TABLE IF EXISTS patients;

CREATE TABLE patients
(
	id		BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
	first_name	varchar(255) DEFAULT NULL,
	last_name	varchar(255) DEFAULT NULL,
	email		varchar(255) DEFAULT NULL,
	address		varchar(255) DEFAULT NULL,
	diagnosis	varchar(255) DEFAULT NULL,
	phone		varchar(255) DEFAULT NULL,
	status		varchar(255) DEFAULT NULL,
	created_at	TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	image_url	varchar(255) DEFAULT NULL,
	PRIMARY KEY(id),
	CONSTRAINT UQ_Patients_Email UNIQUE(email)

) AUTO_INCREMENT = 1;