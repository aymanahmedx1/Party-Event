const animationDuration = 300;
// & DOCUMENT START 
$(".left-menu").css({ "left": - $(".collapseMenu").innerWidth() });
$(document).ready(function () {
    $(".singerCollapse").not($(".singerCollapse").eq(0)).slideUp();
    setTimeout(() => {
        $(".loadinArea").remove();
        $("body").css("overflow", "auto");
    }, 300);
})
/// * WINDOW SIZw CHANGE MENU RESET
$(window).resize(function (e) {
    let collapseMenuWidth = $(".collapseMenu").innerWidth();
    $(".left-menu").css({ "left": - collapseMenuWidth });
    $("section").css({ "margin-left": 0 });
    $(".collapseMenu").css("collapseMenuShadow");
});
// ~ WINDOW SCROLL 
$(window).scroll(function () {
    if ($(window).scrollTop() > $(window).height() / 2) {
        $(".openButton").css({ "color": "black" });
    } else {
        $(".openButton").css({ "color": "white" });
    }
});


// ! EVENT LISTENER
// & LEFT MENU 
$("ul li a").click(function (e) {
    e.preventDefault();
    let targetLocation = $(e.target).attr("href");
    let offset = $(targetLocation).offset().top;
    $("body , html").animate({ "scrollTop": offset }, 100, function () {
        openAndCloseSideBar();
    })
});

// ^ Collapse Area 
$(".singerHead").click(function (e) {
    $(".singerCollapse").not($(e.target).next()).slideUp(animationDuration);
    $(e.target).next().slideToggle(animationDuration)
})

// ^ left Menu Buttons
$(".openButton").click(function () {
    openAndCloseSideBar();
})

$(".collapseMenu i").click(function () {
    openAndCloseSideBar();
})
function openAndCloseSideBar() {
    const width = $(".collapseMenu").innerWidth();
    let marginValue = $(window).width() > 992 ? width : 0;
    if ($(".left-menu").css("left") === "0px") {
        $("section").animate({ "margin-left": 0 }, animationDuration);
        $(".left-menu").animate({ "left": - width }, animationDuration);
        $(".collapseMenu").removeClass("collapseMenuShadow");
    } else {
        $("section").animate({ "margin-left": marginValue }, animationDuration);
        $(".left-menu").animate({ "left": 0 }, animationDuration);
        $(".collapseMenu").addClass("collapseMenuShadow");
    }

}
// ^ Charctar Counter 
$("textarea").on("input", function (e) {
    const number = 100;
    let textLength = $(e.target).val().length;
    let remaningNumber = number - textLength;
    if (remaningNumber >= 0) {
        $("#remNumber").html(remaningNumber);
    } else {
        $("#remNumber").html("your available character finished");
    }
});

// * Counter
counter();
function counter() {
    const eventDate = new Date("2024-02-15 17:30:00");
    const second = 1000;
    const minute = second * 60;
    const hours = minute * 60;
    const day = hours * 24;
    setInterval(() => {
        let currentDate = new Date();
        const remainingMls = eventDate - currentDate;
        if (remainingMls > 0) {
            $("#dayes").html(`${Math.floor(remainingMls / day)} Day`);
            $("#hours").html(`${Math.floor((remainingMls % day) / hours)} Hours`);
            $("#minuts").html(`${Math.floor((remainingMls % hours) / minute)} Minutes`);
            $("#seconds").html(`${Math.floor((remainingMls % minute) / second)} Seconds`);
        } else {
            $("#dayes").html(0);
            $("#hours").html(0);
            $("#minuts").html(0);
            $("#seconds").html(0);
        }
    }, 1000);

}

