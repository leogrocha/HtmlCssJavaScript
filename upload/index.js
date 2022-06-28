var container = document.querySelector(".container");

var container_file = document.createElement("div");
container_file.className = "container_file";

var input = document.createElement("input");
input.setAttribute("type", "file");

container.appendChild(container_file);
container_file.appendChild(input);



