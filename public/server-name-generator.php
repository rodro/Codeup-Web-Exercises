
<?php


$tastes = array("Bland", "Minty", "Sweet", "Delicious", "Pickled", "Tangy", "Fruity", "Gingery", "Sour", "Yummy");
$pastery = array("Bear claw", "Cannoli", "Croissant", "Croquembouche", "Danish", "Éclair", "Empanada", "Kolache", "Macaron", "Pretzel");

function randomServerName($input){
	$randomIndex =  array_rand($input);
	$output = $input[$randomIndex];
	print_r($output);
}
// print_r(randomServerName($tastes)) . " " . (randomServerName($pastery)) . PHP_EOL;


// $rand_keys1 = array_rand($tastes, 2);
// $rand_keys2 = array_rand($pastery, 2);
// echo $tastes[$rand_keys1[0]] . " " . $pastery[$rand_keys2[1]];
// // echo $pastery[$rand_keys2[1]] . "\n";
//
// print_r
//
?>



<!DOCTYPE html>
<html>
  <head>
  <style>
    body {
    color: pink;
    background: red
}

h1 {
    color: #00ff00;
    text-align: center;
}

p.ex {
    color: rgb(0,0,255);
}
</style>
    <meta charset="utf-8">
    <title>my server name</title>
  </head>
  <body>
<h1 class"header"> <?php  print_r(randomServerName($tastes)) . " " . (randomServerName($pastery)) . PHP_EOL ?></h1>
  </body>
</html>
