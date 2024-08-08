//si no comentaba este código que agregué siguiendo lo indicado en clases, no me funciona el código de abajo...
//import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";

//Parte opcional, muestra mensajes y limpia formulario
$(document).ready(function () {
    $("#btn-send").click(function () {
        const nombre = $("#inputName").val();
        const apellido = $("#inputLastName").val();
        const email = $("#inputEmail").val();
        const mensaje = $("#inputMessage").val();
        if (nombre === "" || apellido === "" || email === "" || mensaje === "") {
            alert("Por favor, completa todos los campos del formulario.");
        } else {
            alert("Genial, te contactaré muy pronto...");
            $("#form__contact")[0].reset();
        }
    });
});
