const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.content');
const body = document.querySelector('body');
const textopener = document.querySelector('.faqs__opener');
const text = document.querySelector('.faqs__content-text');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger--close');
    nav.classList.toggle('nav--opener');
    body.classList.toggle('body--hidden');
})

textopener.addEventListener('click', function(){
    textopener.classList.toggle('faqs__closer');
    text.classList.toggle('text--block'); 
})