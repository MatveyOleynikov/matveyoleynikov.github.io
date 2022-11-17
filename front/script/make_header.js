const make_header = async () => {
    console.log("HEAD")
    if( window.innerWidth >= 700 ){
        console.log("BiG")
        document.querySelector('#header').innerHTML = "<nav class=\"navigation\"> <div class=\"icon\"><a href=\"index.html\" class=\"nav_block\"><div id=\"circle\"></div><ul class=\"logo\">EyeSightKick</ul></a></div><ul class=\"main-menu\"style=\"position: fixed;\"><li class=\"nav_block\"><a href=\"index.html\">Главная</a></li><li class=\"nav_block\"><a href=\"trains.html\">Тренировки</a></li><li class=\"nav_block\"><a href=\"subscription.html\">Подписка</a></li><li class=\"nav_block\"><a href=\"login.html\">Войти</a></li><li class=\"nav_block\"><a href=\"profile.html\">Профиль</a></li></ul></nav>"
    } else {
        console.log("Small")
        document.querySelector('#header').innerHTML = "<nav class=\"navigation\"> <ul class=\"main-menu\" style=\"position: fixed;\"><li class=\"nav_block\"><a href=\"index.html\">Главная</a></li><li class=\"nav_block\" ><a href=\"trains.html\">Тренировки</a></li><li class=\"nav_block\" ><a href=\"subscription.html\">Подписка</a></li><li class=\"nav_block\"><a href=\"login.html\">Войти</a></li><li class=\"nav_block\"><a href=\"profile.html\"> Профиль</a></li></ul></nav>"
    } 
    makeProfileVisible()
}

window.onresize = function( event ) {
    console.log("bubro")
    if( window.innerWidth >= 700 ){
        console.log("BiG")
        document.querySelector('#header').innerHTML = "<nav class=\"navigation\"> <div class=\"icon\"><a href=\"index.html\" class=\"nav_block\"><div id=\"circle\"></div><ul class=\"logo\">EyeSightKick</ul></a></div><ul class=\"main-menu\"style=\"position: fixed;\"><li class=\"nav_block\"><a href=\"index.html\">Главная</a></li><li class=\"nav_block\"><a href=\"trains.html\">Тренировки</a></li><li class=\"nav_block\"><a href=\"subscription.html\">Подписка</a></li><li class=\"nav_block\"><a href=\"login.html\">Войти</a></li><li class=\"nav_block\"><a href=\"profile.html\">Профиль</a></li></ul></nav>"
    } else {
        console.log("Small")
        document.querySelector('#header').innerHTML = "<nav class=\"navigation\"> <ul class=\"main-menu\" style=\"position: fixed;\"><li class=\"nav_block\"><a href=\"index.html\">Главная</a></li><li class=\"nav_block\" ><a href=\"trains.html\">Тренировки</a></li><li class=\"nav_block\" ><a href=\"subscription.html\">Подписка</a></li><li class=\"nav_block\"><a href=\"login.html\">Войти</a></li><li class=\"nav_block\"><a href=\"profile.html\"> Профиль</a></li></ul></nav>"
    } 
    makeProfileVisible()
};

const header = make_header();