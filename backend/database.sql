CREATE DATABASE cloud_robotics;

CREATE TABLE cloud_robotics_master (
    UNIQUE_ID VARCHAR(255) PRIMARY KEY,
    ROBOT_NAME VARCHAR(1000),
    LENGTH_M FLOAT(2),
    WIDTH_M FLOAT(2),
    HEIGHT_M FLOAT(2),
    SENSOR_TYPE VARCHAR(1000),
    IMAGE_URL TEXT);

CREATE TABLE USERS (
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255),
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

INSERT INTO USERS (USER_NAME, USER_EMAIL, USER_PASSWORD) VALUES('aniruddh', 'abalram1@umd.edu','password);