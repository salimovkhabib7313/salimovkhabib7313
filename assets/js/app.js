

/* Menu nav toggle */
$("#nav_toggle").on("click", function (event) {
    event.preventDefault();

    $(".nav-toggle").toggleClass("active");
    $("#nav").toggleClass("active");
});


function closeResNavbar() {
    $(".nav-toggle").removeClass("active");
    $("#nav").toggleClass("active");
}