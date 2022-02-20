$(document).ready(function () {
    $('.mobileNavbarIcon i').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('show');
    });
    $('.backToTop').click(function(e){
        e.preventDefault();
        $('html,body').animate({
          scrollTop:0
        },550);
    })
});
