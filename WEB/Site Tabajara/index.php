<?php

include 'conexao.php';

$buscar_cadastro = "SELECT * FROM contatos";
$query_cadastro = mysqli_query($connx, $buscar_cadastro);

?>



<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="description"
      content="Organizações Tabajara é um conglomerado monopolista que resolve seus problemas e não te deixa na mão!"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="icon" href="img/favicon.png" />

    <!-- Importação da fonte Rubik, do Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />

    <!-- Associação com os arquivos CSS -->
    <link rel="stylesheet" href="css/general.css" />
    <link rel="stylesheet" href="css/style.css" />

    <!-- Inclusão de ícones -->
    <script
      type="module"
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
      nomodule
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
    ></script>

    <!-- Associação com o arquivo JS -->
    <script defer src="js/script.js"></script>

    <title>Organizações Tabajara &mdash; Seus problemas acabaram!</title>
  </head>
  <body>
    <header class="cabecalho">
      <a href="#">
        <img
          class="logo"
          alt="Logo das Organizações Tabajara"
          src="img/logo.jpg"
        />
      </a>

      <nav class="nav-principal">
        <ul class="nav-principal-lista">
          <li>
            <a class="nav-principal-link" href="#conglomerado"
              >O Conglomerado Monopolista</a
            >
          </li>
          <li>
            <a class="nav-principal-link" href="#portfolio">Nosso portfólio</a>
          </li>
          <li>
            <a class="nav-principal-link" href="#diretoria"
              >Diretoria e Conselheiros</a
            >
          </li>
          <li>
            <a class="nav-principal-link nav-cta" href="#cta"
              >Acabe com seus problemas!</a
            >
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <section class="secao-hero">
        <div class="hero">
          <div class="hero-text-box">
            <h1 class="titulo-primario">Seus Problemas Acabaram!</h1>
            <p class="hero-descricao">
              Está de saco cheio de ser assaltado? Bebeu todas e acordou com uma
              baranga do lado? Cansada de dietas milagrosas e remédios que
              alucinam mas não diminuem suas medidas? O novo site das
              Organizações Tabajara é a solução.
            </p>
            <a href="#cta" class="btn btn--full margem-direita-pq"
              >Seus problemas acabaram</a
            >
            <a href="#conglomerado" class="btn btn--outline"
              >Conheça mais &darr;</a
            >
            <div class="clientes">
              <div class="clientes-imgs">
                <img src="img/clientes/cliente01.jpg" alt="Customer photo" />
                <img src="img/clientes/cliente02.jpg" alt="Customer photo" />
                <img src="img/clientes/cliente03.jpg" alt="Customer photo" />
                <img src="img/clientes/cliente04.jpg" alt="Customer photo" />
                <img src="img/clientes/cliente05.jpg" alt="Customer photo" />
                <img src="img/clientes/cliente06.jpg" alt="Customer photo" />
              </div>
              <p class="clientes-texto">
                <span>+ de 1 milhão</span> de clientes!
              </p>
            </div>
          </div>
          <div class="hero-img-box">
            <picture>
              <img
                src="img/hero.jpg"
                class="hero-img"
                alt="Os melhores produtos das Organizações Tabajara"
              />
            </picture>
          </div>
        </div>
      </section>

      <section class="secao-conglomerado" id="conglomerado">
        <div class="container">
          <span class="subtitulo">Fique por dentro</span>
          <h2 class="titulo-secundario">O Conglomerado Monopolista</h2>
        </div>

        <div class="container grid grid--2-cols grid--center-v">
          <!-- 01 -->
          <div class="cong-texto-box">
            <p class="cong-numero">01</p>
            <h3 class="titulo-terciario">Nossa História</h3>
            <p class="cong-descricao">
              O imigrante "de algum país europeu" Gilvan Saturnino Tabajara veio
              para o Brasil, trazendo apenas um produto na mala: o Supositório
              de Magnésia Bisurada. Com os primeiros lucros, criou a corporação
              em 1923. Hoje, ela possui 21 empresas e fatura 10 bilhões de reais
              por ano.
            </p>
          </div>
          <div class="cong-img-box">
            <img
              src="img/conglomerado.jpg"
              class="cong-img"
              alt="iPhone app preferences selection screen"
            />
          </div>

          <!-- 02 -->
          <div class="cong-img-box">
            <img
              src="img/concorrencia.jpg"
              class="cong-img"
              alt="iPhone app meal approving plan"
            />
          </div>
          <div class="cong-texto-box">
            <p class="cong-numero">02</p>
            <h3 class="titulo-terciario">Concorrência</h3>
            <p class="cong-descricao">
              Atualmente, as Organizações Tabajara têm como concorrente, o Grupo
              Capivara, liderado por Seu Creysson.
            </p>
          </div>

          <!-- 03 -->
          <div class="cong-texto-box">
            <p class="cong-numero">03</p>
            <h3 class="titulo-terciario">Grandes Realizações</h3>
            <p class="cong-descricao">
              Entre as grandes realizações das Organizações Tabajara está a
              compra da Argentina para tornar um estacionamento.
            </p>
          </div>
          <div class="cong-img-box">
            <img
              src="img/fundadores.webp"
              class="cong-img"
              alt="iPhone app delivery screen"
            />
          </div>
        </div>
      </section>

      <section class="secao-portfolio" id="portfolio">
        <div class="container texto-centralizado">
          <span class="subtitulo">Portfólio</span>
          <h2 class="titulo-secundario">
            Conheça alguns de nossas principais soluções
          </h2>
        </div>

        <div class="container grid grid--3-cols margem-abaixo-md">
          <div class="produtos">
            <img
              src="img/supositorio.jpg"
              class="produto-img"
              alt="Supositório Fênix 2 Resgatável Tabajara"
            />
            <div class="produto-conteudo">
              <p class="produto-titulo">
                Supositório Fênix 2 Resgatável Tabajara
              </p>
              <p class="produto-texto">Dê adeus ao desperdício!</p>
            </div>
          </div>

          <div class="produtos">
            <img
              src="img/ficha-suja.jpg"
              class="produto-img"
              alt="Kit Ficha-Suja Disfarceitor Tabajara"
            />
            <div class="produto-conteudo">
              <p class="produto-titulo">Kit Ficha-Suja Disfarceitor Tabajara</p>
              <p class="produto-texto">
                Você é um candidato que vai concorrer nas próximas eleições e é
                muito famoso junto ao seu eleitorado, não é mesmo?
              </p>
            </div>
          </div>

          <div class="outros-produtos">
            <h3 class="titulo-terciario">Outras soluções</h3>
            <ul class="lista">
              <li class="lista-item">
                <ion-icon
                  class="lista-icone"
                  name="checkmark-outline"
                ></ion-icon
                ><span>Dental Sensibiliteitor e Emotiveitor Tabajara</span>
              </li>
              <li class="lista-item">
                <ion-icon
                  class="lista-icone"
                  name="checkmark-outline"
                ></ion-icon
                ><span>Óculos Trubufu Encareitor Tabajara</span>
              </li>
              <li class="lista-item">
                <ion-icon
                  class="lista-icone"
                  name="checkmark-outline"
                ></ion-icon
                ><span>Super Injection Tênis Enrijeceitor Tabajara</span>
              </li>
              <li class="lista-item">
                <ion-icon
                  class="lista-icone"
                  name="checkmark-outline"
                ></ion-icon
                ><span>Laje Transportátil Viajeitor Tabajara</span>
              </li>
              <li class="lista-item">
                <ion-icon
                  class="lista-icone"
                  name="checkmark-outline"
                ></ion-icon
                ><span>Turbo Mix Jingle Eleitoreitor Tabajara</span>
              </li>
              <li class="lista-item">
                <ion-icon
                  class="lista-icone"
                  name="checkmark-outline"
                ></ion-icon
                ><span>Tênis Aumenteitor Enlarge System Tabajara</span>
              </li>
              <li class="lista-item">
                <ion-icon
                  class="lista-icone"
                  name="checkmark-outline"
                ></ion-icon
                ><span>Super Gata Anti Bullying Protect Tabajara</span>
              </li>
              <li class="lista-item">
                <ion-icon
                  class="lista-icone"
                  name="checkmark-outline"
                ></ion-icon
                ><span>Huckmóvel</span>
              </li>
              <li class="lista-item">
                <ion-icon
                  class="lista-icone"
                  name="checkmark-outline"
                ></ion-icon
                ><span>Pão Cachaça Tabajara</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="container todos-produtos">
          <a href="#" class="link">Temos as soluções para todos os seus problemas &rarr;</a>
        </div>
      </section>

      <section class="secao-diretoria" id="diretoria">
        <div class="container-diretoria">
          <span class="subtitulo">Diretoria e Conselheiros</span>
          <h2 class="titulo-secundario">Nossas Mentes Brilhantes</h2>

          <div class="diretoria">
              <p class="diretor-nome">André Luiz de Oliveira Lima Silva</p>
              <p class="diretor-nome">Davit dos Santos Pereira</p>
              <p class="diretor-nome">Douglas Elias Ramos</p>
              <p class="diretor-nome">Douglas Roberto de Amorim</p>
              <p class="diretor-nome">Marcelo Augusto Gomes da Rocha</p>
              <p class="diretor-nome">Rômulo Vital Domingos</p>
          </div>
        </div>
        <div class="galeria">
          <figure class="item-galeria">
            <img
              src="img/galeria/galeria01.jpg"
              alt="Photo of beautifully arranged food"
            />
          </figure>
          <figure class="item-galeria">
            <img
              src="img/galeria/galeria02.jpg"
              alt="Photo of beautifully arranged food"
            />
          </figure>
          <figure class="item-galeria">
            <img
              src="img/galeria/galeria03.jpg"
              alt="Photo of beautifully arranged food"
            />
          </figure>
          <figure class="item-galeria">
            <img
              src="img/galeria/galeria04.jpg"
              alt="Photo of beautifully arranged food"
            />
          </figure>
          <figure class="item-galeria">
            <img
              src="img/galeria/galeria05.jpg"
              alt="Photo of beautifully arranged food"
            />
          </figure>
          <figure class="item-galeria">
            <img
              src="img/galeria/galeria06.jpg"
              alt="Photo of beautifully arranged food"
            />
          </figure>
          <figure class="item-galeria">
            <img
              src="img/galeria/galeria07.jpg"
              alt="Photo of beautifully arranged food"
            />
          </figure>
          <figure class="item-galeria">
            <img
              src="img/galeria/galeria08.jpg"
              alt="Photo of beautifully arranged food"
            />
          </figure>
          <figure class="item-galeria">
            <img
              src="img/galeria/galeria09.jpg"
              alt="Photo of beautifully arranged food"
            />
          </figure>
          <figure class="item-galeria">
            <img
              src="img/galeria/galeria10.jpg"
              alt="Photo of beautifully arranged food"
            />
          </figure>
          <figure class="item-galeria">
            <img
              src="img/galeria/galeria11.jpg"
              alt="Photo of beautifully arranged food"
            />
          </figure>
          <figure class="item-galeria">
            <img
              src="img/galeria/galeria12.jpg"
              alt="Photo of beautifully arranged food"
            />
          </figure>
        </div>
      </section>
      <section class="secao-cta" id="cta">
        <div class="container">
          <div class="cta">
            <div class="cta-texto-box">
              <h2 class="titulo-secundario">Seus problemas acabaram!</h2>
              <Cadastre-se, class="cta-texto">
                Temos todos os tipos e soluções para você! Cadastre-se, ainda é grátis!
              </p>

              <form class="cta-form" name="sign-up" action="conexao.php" method="post">
                <?php
                  
                  while($receber_cadastro = mysqli_fetch_array($query_cadastro)){
                    $id = $receber_cadastro['id'];
                    $nome = $receber_cadastro['nome'];
                    $email = $receber_cadastro['email'];
                    $indicacao = $receber_cadastro['indicacao'];
                  
                  }
                  ?>
                <div>
                  <label for="nome">Nome</label>
                  <input
                    id="nome"
                    type="text"
                    placeholder="João da Silva"
                    class="form-control"
                    name="nome"
                    required
                  />
                </div>
                <div>
                  <label for="email">E-mail</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="eu@exemplo.com.br"
                    class="form-control"
                    name="email"
                    
                  />
                </div>

                <div>
 
                  <label for="select-como">Como ouviu falar da gente?</label>
                  <select id="select-como" class="form-control" name="select-como" required>
                    <option value="">Escolha uma das opções:</option>
                    <option value="amigos">Amigos e familiares</option>
                    <option value="youtube">Youtube</option>
                    <option value="podcast">Podcast</option>
                    <option value="google">Google</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
                <a href="cadastro.php">
                  <button class="btn btn--form" type="submit">Inscreva-se</button>
                </a>
                
              </form>
            </div>
            <div
              class="cta-img-box"
              role="img"
              aria-label="Alarme Antiazarator Tabajara"
            ></div>
          </div>
        </div>
      </section>
    </main>

    <footer class="rodape">
      <div class="container grid grid--rodape">
        <div class="logo-col">
          <a href="#" class="rodape-logo">
            <img
              class="logo"
              alt="Logo das Organizações Tabajara"
              src="img/logo.jpg"
            />
          </a>

          <ul class="social-links">
            <li>
              <a class="rodape-link" href="#"
                ><ion-icon class="social-icone" name="logo-instagram"></ion-icon
              ></a>
            </li>
            <li>
              <a class="rodape-link" href="#"
                ><ion-icon class="social-icone" name="logo-facebook"></ion-icon
              ></a>
            </li>
            <li>
              <a class="rodape-link" href="#"
                ><ion-icon class="social-icone" name="logo-twitter"></ion-icon
              ></a>
            </li>
          </ul>

          <p class="copyright">
            Copyright &copy; <span class="ano">2021</span> por Organizações
            Tabajara S.A. Todos os direitos não reservados.
          </p>
        </div>
        <div class="endereco-col">
          <p class="rodape-titulo">Contate-nos</p>
          <address class="contatos">
            <p class="endereco">
              Rua dos Bobos, n.&ordm; 0, Recife, PE - Brasil
            </p>
            <br />
            <a class="rodape-link" href="mailto:#">
              seusproblemasacabaram@organizacoestabajara.com.br
            </a>
          </address>
        </div>

        <nav class="nav-col">
          <p class="rodape-titulo">Conta</p>
          <ul class="rodape-nav">
            <li><a class="rodape-link" href="#">Criar Conta</a></li>
            <li><a class="rodape-link" href="#">Login</a></li>
            <li><a class="rodape-link" href="#">iOS app</a></li>
            <li><a class="rodape-link" href="#">Android app</a></li>
          </ul>
        </nav>
        <nav class="nav-col">
          <p class="rodape-titulo">Conglomerado Monopolista</p>
          <ul class="rodape-nav">
            <li><a class="rodape-link" href="#">Sobre Nós</a></li>
            <li><a class="rodape-link" href="#">Negócios</a></li>
            <li><a class="rodape-link" href="#">Nossos Produtos</a></li>
            <li><a class="rodape-link" href="#">Carreira</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  </body>
</html>
