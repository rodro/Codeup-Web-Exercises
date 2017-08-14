<?php



require_once "park_logins.php";
require_once "db_connect.php"



$connection->exec ("DROP TABLE IF EXISTS parks ");
$createParksTable = 'CREATE TABLE if not exists parks (
id INT UNSIGNEDN NOT NULL AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
location VARCHAR(255) NOT NULL
date_established DATE NOT NULL,
area_in_acres DOUBLE NOT NULL,
PRIMARY KEY (id)
)';
$connection ->exec ($createParksTable);
echo "table created" . PHP_EOL;
