const axios = require('axios');

let output = document.querySelector('.output');

let search = document.querySelector('.search');

search.onclick = function(){
    let input = document.querySelector('#input').value;

    output.innerHTML = `
        <div class="text-center">
            <div class="spinner-border text-dark mx-auto" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    `;

    search.disabled = true;
    
    axios.get('https://api.github.com/users/' + input)
    .then(response => {
        output.innerHTML = `
            <img src="${response.data.avatar_url}" class="rounded-circle d-block mx-auto mb-3 img-fluid">
            <p>            
                <b>Usuário:</b> ${response.data.login}<br>
                <b>Nome:</b> ${response.data.name}<br>
                <b>Resumo:</b> ${response.data.bio}<br>
                <b>GitHub:</b> <a href="${response.data.html_url}" target="_blank">${response.data.html_url}</a><br>
                <b>Localização:</b> ${response.data.location}
            </p>
        `;
        search.disabled = false;
    }).catch(error => {
        search.disabled = false;
        if (error.response.status === 404) {
            output.innerHTML = `
                <p class="text-danger">Usuário não encontrado</p>
            `;
        }
    });
};