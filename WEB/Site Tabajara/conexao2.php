<?php

define("USER", "root");
define("PASS", "");
define("DB", "tabajara");
define("SERVER", "localhost");

$conexao = mysqli_connect(SERVER, USER, PASS, DB);

if (mysqli_connect_errno()){
    die("<b> Erro ao conectar. </b> Motivo: ". mysqli_connect_errno());
}

?>