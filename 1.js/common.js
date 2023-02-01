$(document).ready(function () {

    $(".menu_icon").click(function () {
        $(this).toggleClass("active")
        $('.header_menu').toggleClass('width100');
    });

    $('.footer_menu_wrap').hide();

    $(".menu_button").click(function () {
        $('.close').toggleClass("none")
        $('.open').toggleClass("none")
        $('.footer_menu_wrap').stop().slideToggle();
    });

    $("#top_btn").click(function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});