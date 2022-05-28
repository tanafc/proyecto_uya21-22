$(document).ready(function () {
    $('ul.ventanas li a:first').addClass('activar');
    $('.secciones article').hide();
    $('.secciones article:first').show();

    $('ul.ventanas li a').click(function () {
        $('ul.ventanas li a').removeClass('activar');
        $(this).addClass('activar');
        $('.secciones article').hide()

        var activeTab = $(this).attr("href");
        $(activeTab).show();
        return false
    });
});

