<?php

require_once "Person.php";
require_once "Superhero.php";


$superman = new Superhero('Clark', 'Kent');
$superman->pseudonym = 'Superman';
$superman->capeColor = 'red';

var_dump($superman->hasCape());