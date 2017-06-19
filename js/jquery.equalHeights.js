$.fn.equalHeights = function (el) {
    $(el).each(function () {
        var currentTallest = 0;
        $(el).each(function (i) {
            if ($(this).height() > currentTallest) { currentTallest = $(this).height(); }
        });
        $(el).css({ 'min-height': currentTallest });
    });
    return this;
};