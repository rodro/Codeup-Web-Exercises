<?php for( $i = 0; $i < count( $results->data ); $i++ ) : ?>
        <tr>
                <td><?php echo $results->data[$i]['Name']; ?></td>
                <td><?php echo $results->data[$i]['Country']; ?></td>
                <td><?php echo $results->data[$i]['Continent']; ?></td>
                <td><?php echo $results->data[$i]['Region']; ?></td>
        </tr>
<?php endfor; ?>
