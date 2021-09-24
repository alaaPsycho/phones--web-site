
$(document).ready(function(){
$('#menu').click(function(){
    $(this).toggleClass('fa-times')
    $('.nav').toggleClass('nav-toggle')

    })
                
            // scroll top scrollTo
            $('.scroll-top').on('click',function(){
                $('html,body'). scrollTop(0);
                
            })

    //nav a add class active
$('.nav li a').on('click',function(e){
    e.preventDefault;
    $('.nav a').removeClass('active');
    $(this).addClass('active');

});


//small img
$('.small-img img').on('click',function(){

    $(this).addClass('active').siblings().removeClass('active');
    let image = $(this).prop('src');
    $('.big-image img').prop('src',image)
});


//gallery btn
$('.gallery .btn').on('click',function(){
    let filter = $(this).attr('data-filter');
    if(filter == 'all'){
        $('.gallery .box').show(400)
    }else{
        $('.gallery .box').not('.' + filter).hide(200);
        $('.gallery .box').filter('.' + filter).show(400)

    }
    $(this).addClass('active').siblings().removeClass('active')
});

 

$(window).on('scroll load',function(){
    $('#menu').removeClass('fa-times')

    $('.nav').removeClass('nav-toggle');
    if($(window).scrollTop() > 68){
        $('header .header-two').addClass(('header-active'))
    }
    else
    $('header .header-two').removeClass(('header-active'));

        //scroll top fade in
        if($(window).scrollTop() >= 1800){
            $('.scroll-top').fadeIn(400)
        }else{
            $('.scroll-top').fadeOut(400)

        }
        
    //services section
    let services =$('.deal .box-container .icons-container .icons').offset().top - 200;
    if($(window).scrollTop() >= services){
        $('.deal .box-container .icons-container .icons').animate({opacity:.5})
        $('.deal .box-container .icons-container .icons').animate({opacity:1})


    }
    
    //addClass on scroll

   /* $('section').each(function(){
        let height = $(this).height();
        let offset  = $(this).offset().top - 200;
        let top = $(window).scrollTop;
        let id = $(this).attr('id');
        if(top >= offset ){//&& top < offset + height
            $('.nav ul li a').removeClass('active');
           $('.nav').find(`[href="#${id}"]`).addClass('active');
           // $(`.nav a[href= "#${id}"]`).addClass('active');

        }

    })*/
})





//home slider  owlCarousel js

/*$('.home-slider').owlCarousel({
    items:1,
    autoplay:true,
    dots:false,
    autoplayHoverPause:true,

    autoplayTimeout:3000
});
*/

































})

/*
//scrollreveal
ScrollReveal().reveal('.heading', {
    delay: 375,
    duration: 500,
    reset: true,
    scale: 0.85 
});

*/
