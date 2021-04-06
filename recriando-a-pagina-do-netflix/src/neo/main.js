$('.card').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
$('.landscape').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


$(".theme").on("click", function() {
    $(this).children("i").toggleClass("fas fa-moon");
    $(this).children("i").toggleClass("fas fa-sun");
    $("body").toggleClass("light");
    $("body").toggleClass("dark");
});