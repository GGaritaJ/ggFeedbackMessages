///////////////////////////////////////////////
// ggFeedbackMessage Cell JS/CSS PlugIn V1.0 //
//  Developed by: Ing.Gerardo Garita J.      //
//                FullStack Developer        //
//  email:  info@ggaritaj.com                //
//  date:       friday, 2018-09-15           //
//  last date:  friday, 2018-09-15           //
///////////////////////////////////////////////

; (function ($) {
    jQuery.fn.FeedbackMessage = function () {
        return this;
    };
    jQuery.fn.ggFeedbackMessage = function (options) {
        try {
            var type = 'info';
            var title = 'TITLE';
            var text = 'TEXT';
            var delay = 1500;
            var duration = 10000;
            var animateIn = 1000;
            var animateOut = 700;
            var fire = false;
            var customClasses = '';
            if ((options != undefined) && (options !== null) && (options !== "")) {
                if (options.hasOwnProperty('type')) {
                    type = options.type;
                }
                if (options.hasOwnProperty('customClasses')) {
                    type = (type + ' ' + options.customClasses);
                }
                if (options.hasOwnProperty('title')) {
                    title = options.title;
                }
                if (options.hasOwnProperty('text')) {
                    text = options.text;
                }
                if (options.hasOwnProperty('delay')) {
                    delay = options.delay;
                }
                if (options.hasOwnProperty('duration')) {
                    duration = options.duration;
                }
                if (options.hasOwnProperty('animateIn')) {
                    animateIn = options.animateIn;
                }
                if (options.hasOwnProperty('animateOut')) {
                    animateOut = options.animateOut;
                }
                if (options.hasOwnProperty('fire')) {
                    if (options.fire) {
                        setTimeout(function () {
                            $(".feedbackMsg").css("opacity", "1").fadeIn(animateIn);
                        }, delay);
                        setTimeout(function () {
                            $(".feedbackMsg").fadeTo(animateOut, 0).slideUp(animateOut);
                        }, duration);
                    }
                }
            }
            $(this).append(('<div class="feedbackMsgsContainer cleaner"><div class="feedbackMsg ' + type + ' cleaner" style="display:none;"><div class="icon"><span class="glyphicon"></span></div><div class="text"><label>' + title + '</label><p>' + text + '</p></div><div class="btnClose"><button type="button">&times;</button></div></div ></div >'));
            console.log("gg:feedback messages ready!");
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
    jQuery.fn.FeedbackMessage().Show = function (options) {
        try {
            var container = this;
            var type = 'info';
            var title = 'TITLE';
            var text = 'TEXT';
            var delay = 1500;
            var duration = 10000;
            var animateIn = 1000;
            var animateOut = 700;
            var customClasses = '';
            if ((options != undefined) && (options !== null) && (options !== "")) {
                if (options.hasOwnProperty('type')) {
                    type = options.type;
                }
                if (options.hasOwnProperty('customClasses')) {
                    type = (type + ' ' + options.customClasses);
                }
                if (options.hasOwnProperty('title')) {
                    title = options.title;
                }
                if (options.hasOwnProperty('text')) {
                    text = options.text;
                }
                if (options.hasOwnProperty('delay')) {
                    delay = options.delay;
                }
                if (options.hasOwnProperty('duration')) {
                    duration = options.duration;
                }
                if (options.hasOwnProperty('animateIn')) {
                    animateIn = options.animateIn;
                }
                if (options.hasOwnProperty('animateOut')) {
                    animateOut = options.animateOut;
                }
            }
            $($(container).find("div.feedbackMsg .text label")).text(title);
            $($(container).find("div.feedbackMsg .text p")).text(text);
            $($(container).find("div.feedbackMsg")).removeAttr("class").addClass(("feedbackMsg cleaner " + type));
            setTimeout(function () {
                $($(container).find("div.feedbackMsg")).css("opacity", "1").fadeIn(animateIn);
            }, delay);
            setTimeout(function () {
                $($(container).find("div.feedbackMsg")).fadeTo(animateOut, 0).slideUp(animateOut);
            }, duration);
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
})(jQuery);