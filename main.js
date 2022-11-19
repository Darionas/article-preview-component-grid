'Use strict'

const arrow_1 = document.getElementsByClassName('arrow_1')[0];
const arrow_2 = document.getElementsByClassName('arrow_2')[0];
const author = document.getElementsByClassName('author')[0];
const icons = document.getElementsByClassName('icons')[0];
const max = window.matchMedia("(min-width: 768px)");
const min = window.matchMedia("(max-width: 767px)");


arrow_1.addEventListener('click', exec1);
function exec1() {
    if(max.matches == true) { 
        if(icons.style.display !== 'grid') {
            icons.style.display = 'grid';
        } else {
            icons.style.display = 'none';
        }
    } else if(min.matches == true) {
        author.style.display = 'none';    
        icons.style.display = 'grid';
    } else {
        return;
    }
}

arrow_2.addEventListener('click', exec2);
function exec2() {
    if(min.matches == true) {
        author.style.display = 'grid';
        icons.style.display = 'none';
    } else if(max.matches == true) {
        author.style.display = 'grid';
        icons.style.display = 'none';
    } else {
        return;
    }
}