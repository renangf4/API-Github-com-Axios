let output = document.querySelector('.output');

function search(){
    let input = document.querySelector('.input').value;
    output.innerHTML = `
        Carregando...
    `;
    axios.get('https://api.github.com/users/' + input)
    .then(response => {
        output.innerHTML = `
            Login: ${response.data.login}<br>
            Avatar: <img src="${response.data.avatar_url}"><br>
            Nome: ${response.data.name}<br>
            Biografia: ${response.data.bio}<br>
            Github: <a href="${response.data.html_url}">${response.data.html_url}</a><br>
            ID: ${response.data.id}<br>
            Localização: ${response.data.location}
        `;
    }).catch(error => {
        if (error.response.status === 404) {
            output.innerHTML = `
                Usuário não encontrado
            `;
        }
    });
};