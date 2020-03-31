// burder menu main

function burgerClick() {
    $(".top-menu").toggleClass("active");
    var scrollTop = $(window).scrollTop();
}
$(".navigation .burger").on("click", burgerClick)



// close burger menu when scrolling

$(window).on('scroll', function () {
    $(".top-menu").removeClass("active");
});




// preloader fucntcion
$(window).ready(function () {
    setInterval(function () {
        $('.preload').addClass("loaded")
    }, 5000);

});
// digger fucntion
$(".top-menu li").on("click", function () {
    $(".top-menu").removeClass("active");
    $(".digger").addClass("active");
    if ($(".digger").hasClass('active')) {
        $('html').css('height', '101%')
        $('body').css('height', '101%')
        $('body').css('overflowY', 'hidden')
        // $('.wrapper').css('filter', 'blur(2px)')
    }
    $(".dig-hide").on("click", function () {
        $(".digger").removeClass("active")
        if (!$(".digger").hasClass('active')) {
            $('html').css('height', 'auto')
            $('body').css('height', 'auto')
            $('body').css('overflowY', 'auto')
        }
    })
});
$(".inactive").on("click", function () {
    $(".digger").addClass("active");
})

$(".dig-hide").on("click", function () {
    $(".digger").removeClass("active")
})



//sticky nav function
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $(".navigation.sticky").addClass("active")
    } else {
        $(".navigation.sticky").removeClass("active")
    }
});

// order now button
$('.order').on("click", function () {
    $(".order-now").addClass('active');
    $(".close").on("click", function () {
        $(".order-now").removeClass('active');
    })

});

//explore menu drop

$('.explore').on('click', function () {
    $(".burger-explore").toggleClass('active');
    if ($(".burger-explore").hasClass('active')) {
        $("button.explore").text("Click to hide");
    } else {
        $("button.explore").text("Click to expand");
    }

    $(".explore-hide").on('click', function () {
        $(".burger-explore").removeClass('active')
    })
})