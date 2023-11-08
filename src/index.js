import loadPage from "./page";
import './style.css';
import loadMenuPage from "./menu";
import loadContactPage from "./contact";



var header = document.createElement("header");
var body = document.getElementById("body");
body.prepend(header);

function createHeader (name, func){
    const gridItem = document.createElement('div');
    gridItem.textContent = name;
    header.appendChild(gridItem);
    gridItem.addEventListener('click', function(){
    //    console.log(e.currentTarget.textContent)
        func()
    })
}
//srcElement.childNodes[0].nodeValue
createHeader('Menu', loadMenuPage)
createHeader('Contact', loadContactPage)


function test(){
    console.log('test')
}


loadPage()
