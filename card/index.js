const documentos = [
    {id: 1, titulo_documento: 'Documento Foto Frente', descricao_documento: 'Documento com Foto Frente'},
    {id: 2, titulo_documento: 'Documento Foto Verso', descricao_documento: 'Documento com Foto Verso'},
    {id: 3, titulo_documento: 'Comprovante Residencia', descricao_documento: 'Comprovante Residência'},
    {id: 4, titulo_documento: 'Certidão Casamento', descricao_documento: 'Certidão Casamento'},
    {id: 5, titulo_documento: 'Outros', descricao_documento: "Outros"},
]
// console.log(documentos[i].titulo_documento);

var container = document.querySelector(".container");
for(let i = 0; i < documentos.length; i++){
    var card_documento = document.createElement("div");
    card_documento.className = "card_documento";

    var image_documento = document.createElement("div");
    image_documento.className = "image_documento";
    image_documento.innerHTML = documentos[i].id;

    var container_descricao_documento = document.createElement("div");
    container_descricao_documento.className = "container_descricao_documento";

    var container_titulo_documento = document.createElement("div");
    container_titulo_documento.className = "titulo_documento";

    var titulo_documento = document.createElement("span");
    titulo_documento.className = "titulo_documento";
    titulo_documento.innerHTML = documentos[i].titulo_documento;

    var container_titulo_descricao_documento = document.createElement("div");
    container_titulo_descricao_documento.className = "container_titulo_descricao_documento";

    var descricao_documento = document.createElement("span");
    descricao_documento.className = "descricao_documento";
    descricao_documento.innerHTML = documentos[i].descricao_documento;


    container.appendChild(card_documento);
    card_documento.appendChild(image_documento);
    card_documento.appendChild(container_descricao_documento);
    card_documento.appendChild(container_titulo_documento);
    container_titulo_documento.appendChild(titulo_documento);
    container_titulo_documento.appendChild(container_titulo_descricao_documento);
    container_titulo_descricao_documento.appendChild(descricao_documento);
}
