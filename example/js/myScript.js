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
        customClasses: "myClass",// css classes by message
        redirect: [{// internal links of message
            title: "website",// link title
            url: "http://www.ggaritaj.com/",// link url to redirect
            target: "_blank"// target attribute in a tag
        },
        {
            title: "github",
            url: "https://www.github.com/GGaritaJ/",
            target: "_blank"
        }]
    });
    //test
    setTimeout(function () {
        $("#mainContainer").ggFeedbackMessage({
            title: "Titulo de pruebas 2",
            objects: $("<input type='text' class='form-control' placeholder='type here...' />")// custom objects like images, lists, inputs, video or jquery selector
        });
    }, 7000);
});