///////////////////////////////////////////////
// ggFeedbackMessage Cell JS/CSS PlugIn V1.2 //
//  Developed by: Ing.Gerardo Garita J.      //
//                FullStack Developer        //
//  email:  info@ggaritaj.com                //
//  date:       friday, 2018-09-15           //
//  last date:  friday, 2018-09-21           //
///////////////////////////////////////////////

; (function ($) {
    var _delay = 1000;
    var _duration = 10000;
    var _animationInDuration = 1000;
    var _animationOutDuration = 700;
    jQuery.fn.ggFeedbackMessage = function (options) {
        try {
            var type = 'info';
            var customClasses = '';
            var text = '';
            if ((options != undefined) && (options !== null) && (options !== "")) {
                if (options.hasOwnProperty('title')) {
                    var title = options.title;
                    var links = '';
                    var objects;
                    if (options.hasOwnProperty('type')) {
                        type = options.type;
                    }
                    if (options.hasOwnProperty('customClasses')) {
                        type = (type + ' ' + options.customClasses);
                    }
                    if (options.hasOwnProperty('text')) {
                        text = ('<p>' + options.text + '</p>');
                    }
                    if (options.hasOwnProperty('delay')) {
                        _delay = options.delay;
                    }
                    if (options.hasOwnProperty('duration')) {
                        _duration = options.duration;
                    }
                    if (options.hasOwnProperty('animationInDuration')) {
                        _animationInDuration = options.animationInDuration;
                    }
                    if (options.hasOwnProperty('animationOutDuration')) {
                        _animationOutDuration = options.animationOutDuration;
                    }
                    if (options.hasOwnProperty('redirect')) {
                        links = '<ul>';
                        $(options.redirect).each(function (i, link) {
                            links += ('<li><a href="' + (link.url != undefined ? (link.url != "" ? link.url : "#") : "#") + '" target="' + (link.target != undefined ? (link.target != "" ? link.target : "_blank") : "_blank") + '">' + link.title + '</a>');
                        });
                        links += '</ul>';
                    }
                    var _msg = $(('<div class="feedbackMsgsContainer cleaner"><div class="feedbackMsg ' + type + ' cleaner" style="display:none;"><div class="icon"><span class="glyphicon"></span></div><div class="text"><label>' + title + '</label>' + text + links + '</div><div class="btnClose"><button type="button">&times;</button></div></div></div>'));
                    if (options.hasOwnProperty('objects')) {
                        $($(_msg).find("div.text")).append($(options.objects));
                    }
                    $($(_msg).find("div.btnClose button")).on("click", function () {
                        _ggHide($(this).closest("div.feedbackMsgsContainer"));
                    });
                    $(this).append(_msg);
                    setTimeout(function () {
                        _ggShow(_msg);
                    }, _delay);
                    setTimeout(function () {
                        _ggHide(_msg);
                    }, _duration);
                } else {
                    console.log("gg:no title.");
                }
            } else {
                console.log("gg:no message.");
            }
        }
        catch (err) {
            console.log("Error: " + err + ".");
        }
        finally {
            setTimeout(function () {
                window.dispatchEvent(new Event('resize'));
            }, 1000);
        }
    };
    function _ggShow(obj) {
        if ($(obj).hasClass("feedbackMsgsContainer")) {
            $($(obj).find("div.feedbackMsg")).css("opacity", "1").fadeIn(_animationInDuration);
        }
    };
    function _ggHide(obj) {
        if ($(obj).hasClass("feedbackMsgsContainer")) {
            $($(obj).find("div.feedbackMsg")).fadeTo(_animationOutDuration, 0).slideUp(_animationOutDuration);
            setTimeout(function () {
                $(obj).remove();
            }, _animationOutDuration);
        }
    };
})(jQuery);