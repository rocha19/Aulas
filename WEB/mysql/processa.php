<?php

    $nome = $_POST['nome'];
    $matricula = $_POST['matricula'];
    $nota = $_POST['nota'];
    $email = $_POST['email'];
    $msg = $_POST['msg'];
    
    require('conexao.php');

    if( isset($_POST['operacao']) && $_POST['operacao'] == 'alterar'){
        $sql = "UPDATE alunos 
                set nome = '$nome',
                matricula = '$matricula', 
                notaav1 = $nota, 
                email = '$email', 
                mensagem = '$msg'  
                where id = " . $_POST['id'];    

                $resultado = mysqli_query($conexao,$sql);
                if($resultado == 1){
                    header("location: index.php?status=2");
                }
                else{
                    die('Erro ao alterar aluno');
                }
    }
    else{
        $sql = "INSERT INTO alunos (nome, matricula, notaav1, email, mensagem) 
                          VALUES ( '$nome', '$matricula', $nota, '$email', '$msg')";

            $resultado = mysqli_query($conexao,$sql);
            if($resultado == 1){
                header("location: index.php?status=1");
            }
            else{
                die('Erro ao inserir aluno');
            }
    }

?>