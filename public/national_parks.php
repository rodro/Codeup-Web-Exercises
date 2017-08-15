<?php
    require_once 'Paginator.class.php';

    $conn       = new mysqli( '127.0.0.1', 'vagrant', 'vagrant', 'parks_db' );

    $limit      = ( isset( $_GET['limit'] ) ) ? $_GET['limit'] : 25;
    $page       = ( isset( $_GET['page'] ) ) ? $_GET['page'] : 1;
    $links      = ( isset( $_GET['links'] ) ) ? $_GET['links'] : 7;
    $query      = "SELECT parks_db.name, parks_db.location, parks_db.date_established, parks_db.area_in_acres";

    $Paginator  = new Paginator( $conn, $query );

    $results    = $Paginator->getData( $page, $limit );
?>


<!DOCTYPE html>
    <head>
        <title>National Parks</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    </head>
    <body>
        <div class="container">
                <div class="col-md-10 col-md-offset-1">
                <h1>National Parks</h1>
                <table class="table table-striped table-condensed table-bordered table-rounded">
                        <thead>
                          <?php for( $i = 0; $i < count( $results->data ); $i++ ) : ?>
  <tr>
          <td><?php echo $results->data[$i]['Name']; ?></td>
          <td><?php echo $results->data[$i]['Location']; ?></td>
          <td><?php echo $results->data[$i]['date_established']; ?></td>
          <td><?php echo $results->data[$i]['area_in_acres']; ?></td>
  </tr>
<?php endfor; ?>
                        </thead>

                        <tbody></tbody>
                </table>
                </div>
        </div>
        </body>
</html>
