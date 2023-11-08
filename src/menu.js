export default function loadMenuPage(){
    var div = document.createElement("div");
    var body = document.getElementById("content");
    body.textContent = '';
    body.appendChild(div);
    div.innerText = 'Menu List'
}
