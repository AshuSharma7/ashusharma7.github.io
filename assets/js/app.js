// Скрываем элементы во время загрузки
$('.content').css('opacity', 0);
$('.particles').css('opacity', 0);

$(document).ready(function () {
    // показываем спустя 2 секунды с анимацией
    setTimeout(function () {
        $('.particles').animate({opacity: 1});

        particlesJS.load('particles-js', 'particles.json', function () {
            console.log('particles.json loaded...');
        });

        $('.content').animate({opacity: 1}, 2000);
        $('#preloader').animate({opacity: 0}, 300);

    }, 2000);

});




