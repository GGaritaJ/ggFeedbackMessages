///////////////////////////////////////////////
// ggFeedbackMessage Cell JS/CSS PlugIn V1.0 //
//  Developed by: Ing.Gerardo Garita J.      //
//                FullStack Developer        //
//  email:  info@ggaritaj.com                //
//  date:       friday, 2018-09-15           //
//  last date:  friday, 2018-09-15           //
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
                    var _msg = $(('<div class="feedbackMsgsContainer cleaner"><div class="feedbackMsg ' + type + ' cleaner" style="display:none;"><div class="icon"><span class="glyphicon"></span></div><div class="text"><label>' + title + '</label>' + text + '</div><div class="btnClose"><button type="button">&times;</button></div></div></div>'));
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