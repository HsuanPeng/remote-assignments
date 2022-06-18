const welcome = document.querySelector('.welcome h2');
welcome.addEventListener('click', () => {
    welcome.textContent = 'Have a Good Time!'
})

const openmenu = document.querySelector('.show-menu img');
const aside = document.querySelector('.aside');

openmenu.addEventListener('click', () => {
    aside.style.display = 'block';
})


const closemenu = document.querySelector('.close-menu');
closemenu.addEventListener('click', () => {
    aside.style.display = 'none';
})

const button = document.querySelector('button');
const content2 = document.querySelector('.content2');
button.addEventListener('click', () => {
    content2.style.display = 'block';
})
