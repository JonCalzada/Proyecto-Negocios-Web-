<h1>Nosotros</h1>

<?php
    $nombres = ["Chapis", "Chong", "Pam", "Jim"];
    echo '<p>Desde php, hola '.$nombres[0].'</p>';
    echo '<p>Les mando salu2 a:
    <ul>';
    foreach ($nombres as $nombre) {
        echo '<li>'.$nombre.'</li>';
    }
    echo '</ul>
    </p>';
?>