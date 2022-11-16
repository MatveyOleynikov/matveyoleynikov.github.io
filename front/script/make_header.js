const make_header = async () => {
    console.log("HEAD")
    if( window.innerWidth >= 700 ){
        console.log("BiG")
        document.querySelector('#header').innerHTML = "<nav class=\"navigation\"> <div class=\"icon\"><a href=\"index.html\" class=\"nav_block\"><div id=\"circle\"></div><ul class=\"logo\">EyeSightKick</ul></a></div><ul class=\"main-menu\"style=\"position: fixed;\"><li><a href=\"index.html\" class=\"nav_block\">Главная</a></li><li><a href=\"trains.html\" class=\"nav_block\" >Тренировки</a></li><li><a href=\"subscription.html\" class=\"nav_block\" >Подписка</a></li><li><a href=\"login.html\" class=\"nav_block\">Войти</a></li><li><a href=\"profile.html\" class=\"nav_block\"> Профиль</a></li></ul></nav>"
    } else {
        console.log("Small")
        document.querySelector('#header').innerHTML = "<nav class=\"navigation\"> <ul class=\"main-menu\" style=\"position: fixed;\"><li><a href=\"index.html\" class=\"nav_block\">Главная</a></li><li><a href=\"trains.html\" class=\"nav_block\" >Тренировки</a></li><li><a href=\"subscription.html\" class=\"nav_block\" >Подписка</a></li><li><a href=\"login.html\" class=\"nav_block\">Войти</a></li><li><a href=\"profile.html\" class=\"nav_block\"> Профиль</a></li></ul></nav>"
    } 
    makeProfileVisible()
}

window.onresize = function( event ) {
    console.log("bubro")
    if( window.innerWidth >= 700 ){
        console.log("BiG")
        document.querySelector('#header').innerHTML = "<nav class=\"navigation\"> <div class=\"icon\"><a href=\"index.html\" class=\"nav_block\"><div id=\"circle\"></div><ul class=\"logo\">EyeSightKick</ul></a></div><ul class=\"main-menu\" style=\"position: fixed;\"><li><a href=\"index.html\" class=\"nav_block\">Главная</a></li><li><a href=\"trains.html\" class=\"nav_block\" >Тренировки</a></li><li><a href=\"subscription.html\" class=\"nav_block\" >Подписка</a></li><li><a href=\"login.html\" class=\"nav_block\">Войти</a></li><li><a href=\"profile.html\" class=\"nav_block\"> Профиль</a></li></ul></nav>"
    } else {
        console.log("Small")
        document.querySelector('#header').innerHTML = "<nav class=\"navigation\"> <ul class=\"main-menu\" style=\"position: fixed;\"><li><a href=\"index.html\" class=\"nav_block\">Главная</a></li><li><a href=\"trains.html\" class=\"nav_block\" >Тренировки</a></li><li><a href=\"subscription.html\" class=\"nav_block\" >Подписка</a></li><li><a href=\"login.html\" class=\"nav_block\">Войти</a></li><li><a href=\"profile.html\" class=\"nav_block\"> Профиль</a></li></ul></nav>"
    } 
    makeProfileVisible()
};

const header = make_header();