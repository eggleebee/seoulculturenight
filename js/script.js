$(function(){

    /* wow */
    new WOW().init();


    let img1 = $('.sec .img1') ,
        img2 = $('.sec .img-list .img2'),
        img3 = $('.sec .img3') ,
        img4 = $('.sec .img4');

    img1.hover(function(){
        $(this).stop().animate({'top' : '63px'}, 300, 'swing');
    } , function(){
        $(this).stop().animate({'top' : '83px'}, 300, 'swing');
    })

    img2.hover(function(){
        $(this).stop().animate({'bottom' : '15px'}, 200 , 'swing')
    } , function(){
        $(this).stop().animate({'bottom' : '0'}, 200 , 'swing')
    })

    img3.hover(function(){
        $(this).stop().animate({'top' : '30px'}, 200 , 'swing')
    } , function(){
        $(this).stop().animate({'top' : '50px'}, 200 , 'swing')
    })

    img4.hover(function(){
        $(this).stop().animate({'top' : '60px'} , 200 , 'swing')
    } , function(){
        $(this).stop().animate({'top' : '80px'} , 200 , 'swing')
    })

    let btnMenu = $('#header .btn-menu') ,
        sideMenu = $('#header .side-menu');

    btnMenu.click(function(){

        if( $(this).hasClass('on') ){
            sideMenu.stop().animate({'right' : '-390px'} , 300, 'swing');
            $(this).removeClass('on');
        }else{
            // 처음에 메뉴버튼 클릭하면 on을 가지고 있지안으므로 else문이 먼저 실행 될거에요
            sideMenu.stop().animate({'right' : '0'} , 300, 'swing');
            $(this).addClass('on');
        }

    })

    

})