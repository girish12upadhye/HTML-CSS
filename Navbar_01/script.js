let menus = document.getElementById("menu");

let menuBtn = document.querySelector('.menu-btn');

let closeBtn = document.querySelector('.close-btn');

function openMenu(){
    menus.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
}

function closeMenu(){
    menus.style.display = 'none';
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
}