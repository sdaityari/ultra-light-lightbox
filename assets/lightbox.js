/*
 * @author Shaumik Daityari
 */

var lightbox = lightbox || {};

(function (lightbox, $) {

    var selectors = {
        "overlay" : "black_overlay",
        "content" : "white_content",
        "cross" : "cross"
    };

    lightbox.init = function (lightboxSelector) {
        var lightboxSelector = lightboxSelector || ".image-lightbox",
            lightboxes = $(lightboxSelector),
            content = $("." + selectors.content);

        lightboxes.each(function (index, lightbox) {
            var selector = $(lightbox);

            selector.css({cursor : "pointer"});

            selector.click(function() {
                var image = selector.attr("data-source");
                show(image);
            });
        });

/*        if (!content.length) {
            content = $("<div />", {
                "id" : "light",
                "class" : selectors.content
            }).appendTo($("body"));

            var overlay = $("<div />", {
                "id" : "dark",
                "class" : selectors.overlay
            }).after(content);

            var cross = $("<a />", {
                "id" : "cross",
                "href" : "#",
                "html" : "&#10007;",
                "onclick" : "lightbox.hide();"
            }).appendTo(content);
        }*/
    };

    var show = function (image_source) {

        var content = $("." + selectors.content);

/*        if (!content.length){
            content = $("<div />", {
                "id" : "light",
                "class" : selectors.content
            }).appendTo($("body"));

            var overlay = $("<div />", {
                "id" : "dark",
                "class" : selectors.overlay
            }).after(content);

            var cross = $("<a />", {
                "id" : "cross",
                "href" : "#",
                "html" : "&#10007;",
                "onclick" : "lightbox.hide();"
            }).appendTo(content);
        }*/

        if (!image_source) {
            return;
        }
        $("<img />", {
            "src" : image_source
        }).appendTo(content);

        content.show();
        $("." + selectors.overlay).show();

    };

    var hide = function () {
        $("." + selectors.content).find("img").remove();
        $("." + selectors.content).hide();
        $("." + selectors.overlay).hide();

    };

    $("#" + selectors.cross).click(function () {
        hide();
    });

    $("." + selectors.overlay).click(function () {
        hide();
    })

    $("body").keyup( function (e) {
        if (e.keyCode == 27) { // Escape key is pressed
            hide();
        }
    })

})(lightbox, jQuery);