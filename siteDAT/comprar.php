<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DAT</title>
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width,initial-scale=1">


</head>
<body>
<header>
    <div class="menuHamburguer desaparecer">
        <ul class="menu">
            <li><a href="Sobre.html"> Sobre</a></li>
            <li><a href="Oradores.html"> Oradores</a></li>
            <li><a href="Calendario.html"> CALENDÁRIO</a></li>

        </ul>
    </div>
    <div class="bottomrigth"></div>
    <div class=" bottom"></div>
    <div class="bottom1">
    </div>
    <div class="bottom2"></div>
    <div class="top">
        <ul class="menu">
            <li><abbr class="menu" title="Sobre"> <a href="Sobre.html">
                        <svg id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 0.25 0.1">
                            <defs>
                                <style>.cls-1 {
                                        fill: #fff;
                                    }</style>
                            </defs>
                            <title>bola menu</title>
                            <circle class="cls-1" cx="0.05" cy="0.05" r="0.05"/>
                        </svg>
                    </a></abbr></li>
            <li><abbr title="Oradores"><a href="Oradores.html">
                        <svg id="Camada_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0.25 0.1">
                            <defs>
                                <style>.cls-1 {
                                        fill: #fff;
                                    }</style>
                            </defs>
                            <title>quadrado menu</title>
                            <rect class="cls-1" x="0" y="0" width="0.1" height="0.1" transform="translate(0)"/>
                        </svg>
                    </a></abbr></li>
            <li><abbr title="Calendário"><a href="Calendario.html">
                        <svg id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 0.25 0.1">
                            <defs>
                                <style>.cls-1 {
                                        fill: #fff;
                                    }</style>
                            </defs>
                            <title>triangulo menu</title>
                            <polygon class="cls-1" points="0 0 0 0.1 0.1 0 0 0"/>
                        </svg>
                    </a></abbr></li>
            <a href="Loja.html">
                <li>Loja</li>
            </a>
        </ul>

    </div>

    <div class="top1">

    </div>
    <div class="top2">
        <img src="imagens/casa.svg" width="0">
        <a href="index.html">
            <svg id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50">
                <defs>
                    <style>.cls-30 {
                            fill: none;
                            stroke: #fff;
                            stroke-miterlimit: 20;
                        }

                        .cls-31 {
                            fill: #fff;
                        }</style>
                </defs>
                <title>casa</title>
                <rect class="cls-30" x="0.5" y="18.67" width="30.67" height="30.67"/>
                <polygon class="cls-31" points="0.5 18.67 15.83 0 31.17 18.67 0.5 18.67"/>
            </svg>
        </a>
    </div>
</header>


<main class="comprar">
    <p> Os dados que preencheu: </p>
    <?php

    $filename = 'comprar.txt';

    $nome = $_POST['name'];
    $referencia = $_POST['ref'];
    $email = $_POST['mail'];


    echo $nome;
    echo '<br>';
    echo $referencia;
    echo '<br>';
    echo $email;


    $linha_de_texto = $nome . ' ,' . $referencia . ', ' . $email . "\n";
    echo '<br>';

    file_put_contents($filename, $linha_de_texto, FILE_APPEND);


    function validaMail($nome, $email, $filename)
    {
        $nova_linha_de_texto = $nome . ', ' . $email . "\n";
        file_put_contents($filename, $nova_linha_de_texto, FILE_APPEND);

    }


    function enviaMail($nome, $email)
    {

        $messagem = "Ola, obrigada por comprar a nossa marca, prometemos ser breves com o envio da sua compra
   
Name: $nome
Email: $email
 
Cumprimentos, DAT ";

        mail($email,
            'Submissão da compra',
            $messagem,
            'From:uc2017276867@student.uc.pt ');
    }

    //saber s o mail é valido
    validaMail($nome, $email, $filename);
    //envia o mail
    enviaMail($nome, $email,$referencia);


    ?>

</main>
<footer >
    <div class=" bottom"></div>
    <div class="bottomrigth">
        <img src="imagens/carrinho.svg" width="0">
        <a href="comprar.html">
            <svg id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 50"><defs><style>.cls-33{fill:none;stroke-width:0.75px;}.cls-33,.cls-34{stroke:#fff;stroke-miterlimit:10;}.cls-34{fill:#fff;}</style></defs><title>carrinho</title><line class="cls-33" x1="2.68" y1="4.55" x2="34.46" y2="4.4"/><line class="cls-33" x1="31.47" y1="15.17" x2="34.12" y2="4.66"/><line class="cls-33" x1="2.09" y1="2.09" x2="5.77" y2="17.42"/><line class="cls-33" x1="31.78" y1="14.92" x2="5.77" y2="17.42"/><line class="cls-33" x1="5.77" y1="17.42" x2="4.23" y2="26.22"/><line class="cls-33" x1="23.88" y1="26.12" x2="4.23" y2="26.22"/><line class="cls-33" x1="7.01" y1="4.53" x2="9.82" y2="17.04"/><line class="cls-33" x1="12.25" y1="4.5" x2="14.83" y2="16.55"/><line class="cls-33" x1="17.5" y1="4.48" x2="19.74" y2="16.08"/><line class="cls-33" x1="22.4" y1="4.46" x2="23.51" y2="15.72"/><line class="cls-33" x1="28.08" y1="4.43" x2="27.65" y2="15.32"/><circle class="cls-34" cx="1.75" cy="1.75" r="1.25"/><line class="cls-33" x1="4.23" y1="10.99" x2="32.93" y2="9.61"/><circle class="cls-34" cx="4.72" cy="27.71" r="1.59"/><circle class="cls-34" cx="23.88" cy="27.71" r="1.59"/></svg>
        </a>
    </div>
    <div class="bottomleft"> </div>
    <div class=" ver">
        <img src="imagens/pin.png" width="30" >
    </div>
    <div class="footer volta">
        <div class="voltar">
            <img src="imagens/setas.png" width="30">
        </div>

        <ul class="colF1">DARQ
            Departamento de Arquitectura<br> - Universidade de Coimbra
            R. Colégio Novo,<br>
            3000-143 Coimbra
        </ul>
        <ul class="colF2">DEI
            Departamento de Engenharia Informática <br>
            - Universidade de Coimbra
            Pólo II - Pinhal de Marrocos,<br> 3030-290 Coimbra
        </ul>
        <ul class="colF3">DEI
            Laboratorio Chimico, Museu da Ciência<br>
            3000-272 Coimbra<br>
            museudaciencia.org<br>
            T 239 854 350<br>
        </ul>
    </div>

</footer>
</body>
</html>