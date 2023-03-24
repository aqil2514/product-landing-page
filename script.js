const hamMenu = document.querySelector('.ham-menu');
const navMenu = document.querySelector('.navbar-menu');
const artProducts = document.querySelectorAll('.product .products article');
const imgProducts = document.querySelectorAll('.product .products article img');
const closeProducts = document.querySelectorAll('.close-product')
const moreProduct = document.querySelector('.cta');

hamMenu.onclick= function(){
    hamMenu.classList.toggle('ham-menu-active');
    navMenu.classList.toggle('navbar-menu-active');
}


imgProducts.forEach(function(e){
    e.addEventListener('click', function(){
    e.classList.toggle('img-product-active');
    })
})

artProducts.forEach(function(e){
    e.addEventListener('click', function(){
    e.classList.toggle('product-active');
    })
})

moreProduct.onclick = function(){
    alert('Belom ditambahain. Lagi pusing');
}