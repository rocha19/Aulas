<head>
	<meta charset="UTF-8">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
</head>

<?php

require('conexao.php');

if (isset($_GET["status"]) && $_GET["status"] == 1) {
	echo '<p>Aluno cadastrado com sucesso</p>';
}
if (isset($_GET["status"]) && $_GET["status"] == 2) {
	echo '<p>Aluno alterado com sucesso</p>';
}
echo "<p>Link de cadastro <a href='cadastrar.php'>aqui</a></p>";
?>

<form method="POST" action="index.php">
	Nota: <input type="number" min=0 max=10 name="nota">
	<input type="submit" value="Consultar">
</form>

<?php
if (isset($_POST["nota"]) && !empty($_POST["nota"])) {
	$nota = $_POST["nota"];
	$sql = "SELECT * FROM alunos where notaav1 = $nota";
} else {
	$sql = 'SELECT * FROM alunos';
}

$resultado = mysqli_query($conexao, $sql);
echo "
<table class='table table-dark'>
	<th>Nome</th>
	<th>Matrícula</th>
	<th>Nota AV1</th>
	<th>Operações</th>
	";
if ($resultado) {



	while ($linha = mysqli_fetch_assoc($resultado)) {

		echo " <tr>
		<td>" . $linha["nome"] . "</td>
		<td>" . $linha["matricula"] . "</td>
		<td>" . $linha["notaav1"] . "</td>
		<td><a href='alterar.php?id=$linha[id]'>Alterar</a>---<a href='excluir.php?id=$linha[id]'>Excluir</a>
	</tr>";
		//echo $linha[0]."---".$linha[1]."----".$linha[2]."<br>";
	}
	echo "
</table>";
	mysqli_free_result($resultado);
}

mysqli_close($conexao);

?>