export default function loadContactPage(){
    var div = document.createElement("div");
    var body = document.getElementById("content");
    body.textContent = '';
    body.appendChild(div);
    div.innerText = 'Contact Us'
}
