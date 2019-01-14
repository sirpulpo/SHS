<?php
  $nombre = $_POST["name"];
  $numero = $_POST["telefono"];
  $email = $_POST["email"];
  $mensaje = $_POST["comments"];
  $contenido = "Nombre: ".$nombre."\nTelefono: ".$numero."\nCorreo: ".$email."\nMensaje: ".$mensaje;

  mail("shs@softhsolutions.com", "Contacto", $contenido);
  mail("taz.vd@hotmail.com", "Contacto", $contenido);
  mail("alexis-jafet.020196@hotmail.com", "Contacto", $contenido);
  header("Location:gracias.html");

?>
