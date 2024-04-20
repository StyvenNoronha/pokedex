for(var i = 1; i <898; i++){
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
};