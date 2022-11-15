'Use strict'

const arrow_1 = document.getElementsByClassName('arrow_1')[0];
const arrow_2 = document.getElementsByClassName('arrow_2')[0];
const author = document.getElementsByClassName('author')[0];
const icons = document.getElementsByClassName('icons')[0];

arrow_1.addEventListener('click', exec1);
function exec1() {
    const max = window.matchMedia("(min-width: 768px)");
    if(max.matches == true) {
        author.style.display = 'grid';    
        icons.style.display = 'none';
    } else {
        author.style.display = 'none';    
        icons.style.display = 'grid';
    }
}

arrow_2.addEventListener('click', exec2);
function exec2() {
    author.style.display = 'grid';
    icons.style.display = 'none';
}