import Icon from './img.jpg'



export default function loadPage(){
    var img = document.createElement("img");
    img.src = Icon
    var src = document.getElementById("body");
    src.appendChild(img);
}