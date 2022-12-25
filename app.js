$(function () {
    $('.menuIcon').click(function () {
        var menu = $('.sideBar')
        if(menu.is(':visible')) {
            menu.hide()
        }else {
            menu.show()
            menu.css('width', '30%')
        }
    })

    $('.alertIcon').click(function () {
        var alert = $('.notification')
        if(alert.is(':visible')) {
            alert.hide()
            $('.content').css('width', '100%')
        }else {
            alert.show()
            alert.css('width', '44%')
        }
    })
})