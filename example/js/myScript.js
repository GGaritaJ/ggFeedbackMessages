$(document).ready(function () {
    //"body" selector is the element where the message is added
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
    //test
    setTimeout(function () {
        $("#mainContainer").ggFeedbackMessage({
            title: "Titulo de pruebas 2"
        });
    }, 7000);
});