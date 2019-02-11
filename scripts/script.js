var menu = document.querySelector('.toggle-menu');
var menu_button = document.querySelector('.toggle-menu-button');
var mt = document.getElementById("mountain");
var bg = document.getElementById("sky");

window.addEventListener("mousemove", paralax);
menu_button.addEventListener("click", menu_click);

//paralax pozadina
function paralax(e){
    bg.style.backgroundPosition   =   e.clientX/60 + "% " +  e.clientY/60  + "% ";
    mt.style.backgroundPositionX  =  -e.clientX/70 +"px";
    mt.style.transform            =  "translateY(" + e.clientY/70 + "px)"
}

//hamburger dugme
function menu_click(){
    if( menu.style.display === 'block')
        menu.style.display  =  'none';
    else
        menu.style.display  =  'block';
}
