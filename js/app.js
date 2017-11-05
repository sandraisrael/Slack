var menuIcon = $('.icon');
var fullMenu = $('.full-menu')
var closeIcon = $('#close-icon')

menuIcon.on('click', function(){
    menuIcon.hide();
    fullMenu.show();
})



closeIcon.on('click', function(){
    fullMenu.hide();
    menuIcon.show();
})