// Global scope variables

let header = document.querySelector('.header');
let nav = document.getElementById('nav');
let links = document.querySelectorAll('#links a');

// Nav links function 

function seleccion(link) {
    links[0].className = "";
    links[1].className = "";
    links[2].className = "";
    links[3].className = "";
    links[4].className = "";
    link.className = "seleccionado";

    nav.className = "";
}

// Responsive menu

function responsiveMenu() {
    const x = document.getElementById('nav');
    if(x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

// Hidden header

let prevScrollPosition = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (prevScrollPosition > currentScrollPosition) {
        header.classList.remove('hidden');
        header.classList.add('visible');
    } else {
        header.classList.remove('visible');
        header.classList.add('hidden');
    }

    prevScrollPosition = currentScrollPosition;
});