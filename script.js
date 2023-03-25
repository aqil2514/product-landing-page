const hamMenu = document.querySelector('.ham-menu');
const navMenu = document.querySelector('.navbar-menu');
const artProducts = Array.from(document.querySelectorAll('.product .products article'));
const imgProducts = Array.from(document.querySelectorAll('.product .products article img'));
const closeProducts = document.querySelectorAll('.close-product');
const butShopping = document.querySelectorAll('.product-cart');
const moreProduct = document.querySelector('.cta');

hamMenu.onclick= function(){
    hamMenu.classList.toggle('ham-menu-active');
    navMenu.classList.toggle('navbar-menu-active');
}

document.addEventListener('click', function(e){
    if(!hamMenu.contains(e.target) && !navMenu.contains(e.target)){
        hamMenu.classList.remove('ham-menu-active');
        navMenu.classList.remove('navbar-menu-active')
    }
})


imgProducts.forEach(function(e){
    e.addEventListener('click', function(){
    e.classList.add('img-product-active');
    })
})

artProducts.forEach(function(e){
    e.addEventListener('click', function(){
    e.classList.add('product-active');
    })
})

document.body.addEventListener('click', function(e){
    for(let i = 0; i<artProducts.length; i++){
        for (let i = 0; i<imgProducts.length; i++){
            if(!artProducts[i].contains(e.target) && !imgProducts[i].contains(e.target)){
                artProducts[i].classList.remove('product-active');
                imgProducts[i].classList.remove('img-product-active');
            }
        }
    }
})

butShopping.forEach(function(e){
    e.addEventListener('click', function(){
        alert('Blom dikoding');
    })
})

moreProduct.onclick = function(){
    alert('Belom ditambahain. Lagi pusing');
}