var menuIcon = document.querySelector('#icon');
var fullMenu = document.querySelector('.full-menu')
var closeIcon = document.querySelector('#close-icon')

menuIcon.addEventListener('click', function(){
    menuIcon.classList.add("hide");
    fullMenu.classList.add("show");
    fullMenu.classList.add("nav-animate-in");
});



closeIcon.addEventListener('click', function(){
    fullMenu.classList.remove("show");

    fullMenu.classList.add("hide");
    menuIcon.classList.remove("hide");
})