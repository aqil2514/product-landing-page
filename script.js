const hamMenu = document.querySelector('.ham-menu');
const navMenu = document.querySelector('.navbar-menu');

hamMenu.onclick= function(){
    hamMenu.classList.toggle('ham-menu-active');
    navMenu.classList.toggle('navbar-menu-active');
}