var list = document.getElementById("Lista");
var add = document.getElementById("addElem");
var listLength = document.getElementsByTagName("li");



function addToList() {
    list.innerHTML += "<li>item " + listLength.length;+ "<li>"
}

add.addEventListener("click", addToList);

