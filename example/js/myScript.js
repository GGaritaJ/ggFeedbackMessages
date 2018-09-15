$(document).ready(function () {
    $("body").ggFeedbackMessage({
        type: "info",
        title: "Titulo de pruebas",
        text: "Este es el contenido del mensaje.",
        delay: 1500,// miliseconds
        duration: 10000,// miliseconds
        fire: true,
        customClasses: "myClass"
    });

    setTimeout(function () {
        $("body").FeedbackMessage().Show({
            type: "danger",
            title: "Titulo de pruebas 2",
            text: "Este es el contenido del mensaje 2.",
            delay: 1000,// miliseconds
            duration: 5000,// miliseconds
            customClasses: "myClass2"
        });
    }, 12000);
});