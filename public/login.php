<?php
   function pageController()
   {
   // -------------------------------



   	$data = array();
    //
   // 	if(isset($_GET['count'])){
   // 		$count = $_GET['count'];
   // 	} else {
   // 		$count = 0;
   // 	}
    //
   // 	$data['count'] = $count;

   	return $data;

   }

   extract(pageController());

   ?>
<!DOCTYPE html>
<html>
   <head></head>
   <body>
     <h3>LOGIN PAGE</h3>
      <h4>Login Here </h4>
      <section class="form">
           <form action="welcome_get.php" method="get">
             User name: <input type="text" name="username"><br>
             Password: <input type="text" name="password"><br>
             <input type="submit">


         </form>
   </body>
</html>
