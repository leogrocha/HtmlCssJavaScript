
let container = document.querySelector(".container");

let container_file = document.createElement("div");
container_file.className = "container_file";
let input = document.createElement("input");
input.style.display = "none";
input.type = "file";

let label = document.createElement("label");
//label.style.backgroundImage = 'images/'+ "pdf" +'.png';
label.setAttribute("class", "possui_documento");
//label.setAttribute("backgroundImage", stringUrl);
//label.setAttribute("style", "background-image: url(" + "'"+ stringUrl  + "'" + ");background-repeat: no-repeat;background-size: 388px 388px");


container.appendChild(container_file);
container_file.appendChild(input);
container_file.appendChild(label);