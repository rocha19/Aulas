<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Aula de PHP</title>
</head>
<body>
    <h1>Teste</h1>

    <?php

        echo("Olá PHP");
        echo("<h3> Aprendendo PHP </h3>");
    
        $idade = 33;
        $altura = 1.77;
        $nome = $_GET ["nome"];
        $filhos = array("Maria", "Daniel");
        $login = array("Paulo" => "4564574", 
                            "Maria" => "675734",
                            "João" => "548547");
        
        echo($login(["Maria"] . "<br>"));
        echo ($filhos[0]);

        if($idade > 18){
            echo("<br> $nome é adulto e pode votar");
        }else{
            echo("<br> $nome não pode votar");
        }




    ?>
</body>
</html>