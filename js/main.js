let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

let loginBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

// const swiper = document.querySelector('.review-slider').swiper;

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener("click", () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})


searchBtn.addEventListener("click", () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
})


loginBtn.addEventListener("click", () =>{
    loginForm.classList.add('active');
})

formClose.addEventListener("click", () =>{
    loginForm.classList.remove('active');
})

// const swiper = new Swiper('.review-slider', {
//     spaceBetween: 20,
//     loop:true,
// });

// swiper.slideNext();
