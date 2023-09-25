function getUsuarios() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((resp1) => resp1.json())
    .then((resp2) => mostraUsuarios(resp2));
}

function mostraUsuarios(dados) {
  console.log(dados);

  var container = document.getElementById("listaUsuarios");
  dados.forEach((usuario) => {
    let paragrafo = document.createElement("p");
    paragrafo.innerText = usuario.name;
    container.appendChild(paragrafo);
  });
}

function getFoto() {
  fetch("https://picsum.photos/200/300").then((resp) => mostrarFoto(resp));
}

function mostrarFoto(dado) {
  console.log(dado);
  let container = document.getElementById("fotoDoDia");
  let imagem = document.createElement("img");
  imagem.src = dado.url;
  container.appendChild(imagem);
}

getUsuarios();
getFoto();
