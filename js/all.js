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

    $('.self-intro').on('click',function(){//繫結點選事件
        let selfintro = $('#self-intro').offset().top;//獲取對應元素劇情螢幕頂部的距離
        $('html,body').animate({scrollTop:selfintro},666);//動畫出爐
    });
    $('.script').on('click',function(){//繫結點選事件
        let script = $('#script').offset().top;//獲取對應元素劇情螢幕頂部的距離
        $('html,body').animate({scrollTop:script},666);//動畫出爐
    });
    $('.videop').on('click',function(){//繫結點選事件
        let videop = $('#videop').offset().top;//獲取對應元素劇情螢幕頂部的距離
        $('html,body').animate({scrollTop:videop},666);//動畫出爐
    });
    $('.experience').on('click',function(){//繫結點選事件
        let experience = $('#experience').offset().top;//獲取對應元素劇情螢幕頂部的距離
        $('html,body').animate({scrollTop:experience},666);//動畫出爐
    });
});
