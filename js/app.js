var menuIcon = document.querySelector('#icon');
var fullMenu = document.querySelector('.full-menu')
var closeIcon = document.querySelector('#close-icon')

menuIcon.addEventListener('click', function(){
    menuIcon.classList.toggle("hide");
    fullMenu.classList.remove("nav-animate-out");
    fullMenu.classList.add("nav-animate-in");
});



closeIcon.addEventListener('click', function(){
    fullMenu.classList.remove("nav-animate-in");
    fullMenu.classList.add("nav-animate-out");
    menuIcon.classList.toggle("show");
})