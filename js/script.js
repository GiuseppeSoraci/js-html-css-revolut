$(document).ready(function () {

    //Refs
    var dropdown = $(".dropdown");
    var link = dropdown.children("a");
    var menu = dropdown.children(".dropdown-menu");

    // Dropdown Menù
    link.click(function (e) {

        var visibleMenu = $(this).next(".dropdown-menu");

        // reset
        menu.not(visibleMenu).hide();

        visibleMenu.toggle();

    });
});