$(document).ready(function (){
    // Habilitar tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    
    $("#link_proyectos").click(function() {
        $.ajax({
            type: "get",
            url: "templates/proyectos.html",
            success: function (response) {
                $("#cuerpo").html(response);
                console.log(response);
            }
        });
    });
    $("#link_blog").click(function() {
        $.ajax({
            type: "get",
            url: "templates/blog.html",
            success: function (response) {
                $("#cuerpo").html(response);
                console.log(response);
            }
        });
    });
    $("#Nosotros").click(function() {
        $.ajax({
            type: "get",
            url: "dynamic/php/prueba.php",
            success: function (response) {
                $("#cuerpo").html(response);
                console.log(response);
            }
        });
    });
    $("#link_alternativaA").click(function() {
        $.ajax({
            type: "get",
            url: "templates/alternativas.html",
            success: function (response) {
                $("#cuerpo").html(response);
                console.log(response);
            }
        });
    });
    $("#link_conducta").click(function() {
        $.ajax({
            type: "get",
            url: "templates/CoC.html",
            success: function (response) {
                $("#cuerpo").html(response);
                console.log(response);
            }
        });
    });
});
