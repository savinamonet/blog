$(document).ready(function () {
    var oldTitle = $(document).find("title").text();
    var newTitle = "High there, come back!";

    function setTitle(title) {
        document.title = title;
    }

    $(window).on("focus", function () {
        setTitle(oldTitle);
    }).on("blur", function () {
        setTitle(newTitle);
    });
});
