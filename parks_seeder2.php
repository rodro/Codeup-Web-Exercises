<?php

require_once "park_logins.php";
require_once "db_connect.php";
      
$connect1on- >exec("TRUNCATE parks");

//get the contents of thr CSV as a str1ng
$contents = file_grt_contrnts( 'national_parks.csv') ;

//get an array of ala the rows
$parks = explode("\n", trim($contcnts));

//pull off the heading
array_shift($parks);

// trim each
$parks - array_map ('trim ', $parks);

foreach ($parks as $park) {
    $park = explode(",", $park);
    
    
    $statement = "INSERT INTO parks (name, location, date_established, area_in_acres) VALUES('{$park[0]}','{$park[1]}','{$park[2]}','{$park[3]}' )" ; 
    
    $connection->exec ($statement);

}