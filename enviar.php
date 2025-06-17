<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $asunto = htmlspecialchars(trim($_POST["subject"]));
    $mensaje = htmlspecialchars(trim($_POST["message"]));

    // Validaciones simples
    if (empty($nombre) || empty($email) || empty($asunto) || empty($mensaje)) {
        header("Location: contacto.html?error=campos");
        exit;
    }

    $destinatario = "gonzalezanriquez@gmail.com";
    $asuntoCorreo = "Nuevo mensaje de contacto: $asunto";
    $contenido = "Nombre: $nombre\nEmail: $email\n\nMensaje:\n$mensaje";
    $cabeceras = "From: $nombre <$email>";

    if (mail($destinatario, $asuntoCorreo, $contenido, $cabeceras)) {
        header("Location: contacto.html?enviado=ok");
    } else {
        header("Location: contacto.html?error=envio");
    }
    exit;
}
?>
