<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Média do Aluno</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body style="background-image: linear-gradient(to right, #0b4b70 , #1aa17f);">
    <div class="container mt-5">
        <div class="row">
            <h1 style="text-align:center;">Sistema de Cadastro de Notas</h1>
        </div>
        <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-6">
                <form action="" method="post">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Nome do Aluno</label>
                        <input name="nome-aluno" type="text" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"> 
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Nota 1</label>
                        <input name="n1" type="number" min="0" max="10" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"> 
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Nota 2</label>
                        <input name="n2" type="number" min="0" max="10" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"> 
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Nota 3</label>
                        <input name="n3" type="number" min="0" max="10" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"> 
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Nota 4</label>
                        <input name="n4" type="number" min="0" max="10" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"> 
                    </div>

                    <button name="btn-cadastro" type="submit" class="btn btn-primary">Cadastrar no sistema</button>
                </form>
            </div>
            <?php
                if(isset($_POST["btn-cadastro"])){

                    $nomeAluno = $_POST["nome-aluno"];
                    $n1 = $_POST["n1"];
                    $n2 = $_POST["n2"];
                    $n3 = $_POST["n3"];
                    $n4 = $_POST["n4"];

                    
                    
                    
            ?>
            <div class="col-lg-3" style="padding-top: 30px;">
            <?php
                    if($nomeAluno == "" || $n1 == "" || $n2 == "" || $n3 == "" || $n4 == ""){
                        echo "<div class='alert alert-danger' role='alert'>
                            Preencha todos os campos!
                    </div>";
                    }else{
                        $media = ($n1 + $n2 + $n3 + $n4)/4;
                        $result = ($media?"Aluno Aprovado":"Aluno Reprovado! O aluno não atingiu a média");
                        echo "<div class='alert alert-primary' role='alert'>
                            Notas do aluno(a) ${nomeAluno} Cadastradas com SUCESSO!
                        </div>";
                        echo "<div class='alert alert-success' role='alert'>
                            Média: ${media} | ${result}.
                        </div>";
                    }   

                }
            ?>

            </div>
        </div>
    </div>
</body>
</html>