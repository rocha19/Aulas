<?php
    
    $id = $_POST['id'];
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $indicacao = $_POST['indicacao'];

    require('conexao2.php');

    if(isset($_POST['operacao']) && $_POST['operacao'] == 'alterar') {
        sql = ;
    }
    else{
        $sql = "INSERT INTO contatos (nome, ...., ...) VALUES ('$nome','','')";

        $resultado = ''
            
    }
?>