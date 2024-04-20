Pokémon List Generator
Este é um simples script JavaScript que utiliza a PokéAPI para gerar uma lista de Pokémon dinamicamente em uma página da web. Ele faz chamadas AJAX para a PokéAPI para obter informações sobre os Pokémon e exibi-los em cards.

Como usar
Basta incluir o script JavaScript em uma página HTML e ter um elemento com o id linha onde os cards dos Pokémon serão inseridos.

html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokémon List</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <div id="linha" class="row"></div>

    <script>
        $(document).ready(function() {
            for (var i = 1; i < 898; i++) {
                $.ajax({
                    url: `https://pokeapi.co/api/v2/pokemon/${i}`,
                    method: 'GET',
                    async: true,
                    success: function(resposta) {
                        var linha = document.getElementById('linha');
                        var conteudo = linha.innerHTML; // Acumula o conteúdo atual

                        conteudo += `
                        <div class="col-md-2 mb-2 card .card-info.card-outline teste">
                            <div class=" " style="width: 100%; ">
                                <img src="${resposta['sprites']['other']['dream_world']['front_default']}" class="card-img-top" alt="${resposta['forms'][0]['name']}">
                                <div class="card-body card-outline card-info">
                                    <h5 class="card-title">${resposta['forms'][0]['name']}</h5>
                                </div>
                            </div>
                        </div>
                        `;

                        linha.innerHTML = conteudo; // Define o conteúdo acumulado

                        console.log(resposta.sprites.other['dream_world'].front_default);
                        console.log(resposta.forms[0].name);
                    },
                })
            }
        });
    </script>
</body>
</html>
Nota
Este script utiliza jQuery para fazer chamadas AJAX para a PokéAPI e exibir os Pokémon em cards. Certifique-se de incluir o jQuery antes de usar este script.
