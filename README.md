# ggFeedbackMessages
jQuery plugin ggFeedbackMessages v1.0
-developed by GGaritaJ: Gerardo Garita-

Plugin based on jquery to sends different types of feedback messages to the user (ex: warning, information, danger, success).

Usage:
```javascript
$("body").ggFeedbackMessage({
    title: "Titulo de pruebas",// required
    text: "Este es el contenido del mensaje.",// not required
    type: "success",// info is default, success, warning, danger
    delay: 0,// miliseconds
    duration: 5000,// miliseconds
    animationInDuration: 1000,// miliseconds
    animationOutDuration: 700,// miliseconds
    customClasses: "myClass"// css classes by message
});
```

Online example: https://jsfiddle.net/GGaritaJ/0zsbL3vw/1/

More info: www.ggaritaj.com info@ggaritaj.com
