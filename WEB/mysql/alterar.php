<?php

    $id = $_GET['id'];
    require('conexao.php');
    $sql = "select * from alunos where id = $id";

    $resultado = mysqli_query($conexao, $sql);
    $linha=mysqli_fetch_row($resultado);
?>

<head>
	<meta charset="UTF-8">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
</head>

<body>
<br><br>
<div class="container">
<form class="form-control" action="processa.php" method="post">
Nome: <input class="form-control" type="text" name="nome" id="" value="<?=$linha[1];?>" required><br>
Matricula: <input class="form-control" type="text" name="matricula" id="" value="<?=$linha[2];?>" required><br>
Email: <input class="form-control" type="email" name="email" id="" value="<?=$linha[4];?>" required><br>
Nota AV1: <input class="form-control" type="number" name="nota" id="" value="<?=$linha[3];?>" required><br>
Mensagem: <input class="form-control" type="text" name="msg" id="" value="<?=$linha[5];?>" required>
<input type="hidden" name="operacao" value="alterar">
<input type="hidden" name="id" value="<?=$id; ?>">
<br>
<input class="btn btn-success" type="submit" value="Alterar">
</form>
</div>
</body>