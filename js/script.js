function closeMenu(){
    document.getElementById("navbar").style.height = "0%";
}
function openMenu(){
    document.getElementById("navbar").style.height = "100%";
}

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    $(".title-head").css({
        'transform' : 'translate(0px,'+ wScroll/4 +'%)'
    })

    $(".p-head").css({
        'transform' : 'translate(0px,'+ wScroll +'%)'
    })

    $(".img-acc").css({
        'transform' : 'translate(150px,'+ wScroll/3 +'%)'
    })

    $(".akes").css({
        'transform' : 'translate(150px,-'+ wScroll/6 +'%)'
    })

    $(".akess").css({
        'transform' : 'translate(250px,-'+ wScroll/8 +'%)'
    })

    // $(".bottle1").css({
    //     'transform' : 'translate(0px,'+ wScroll/50 +'%)'
    // })

    // $(".bottle3").css({
    //     'transform' : 'translate(0px,'+ wScroll/100 +'%)'
    // })

    // $(".bottle2").css({
    //     'transform' : 'translate(0px, -'+ wScroll/150 +'%)'
    // })


    if(wScroll > 600){
        console.log('ok');
        $('.navbar').addClass('muncul');
    }
    else
    {
        $('.navbar').removeClass('muncul');
    }

})

function togglePopup(){
    document.getElementById('popup-1').classList.toggle('active');
}
function togglePopup1(){
    document.getElementById('popup-2').classList.toggle('active');
}
function togglePopup2(){
    document.getElementById('popup-3').classList.toggle('active');
}

document.addEventListener("mousemove", parallax);
function parallax(e){
    document.querySelectorAll(".accHand").forEach(function(move){
        var moving_value = move.getAttribute("data-value");
        var x = e.clientX * moving_value / 10;
        var y = e.clientY * moving_value / 10;
        move.style.transform = "translateX(" + x + "px) translateY(" + y +"px)";
    });
}