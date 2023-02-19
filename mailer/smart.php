<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'server851406.nazwa.pl';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'info@server851406.nazwa.pl';                 // Наш логин
$mail->Password = '657421098SerJke!';                           // Наш пароль от ящика
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to
 
$mail->setFrom('info@server851406.nazwa.pl', 'Zycie Od Nowa');   // От кого письмо 
$mail->addAddress('zycieodnowakrakow@gmail.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данні з форми';
$mail->Body    = '
		Користувач лишив контактні данні <br> 
	Ім"я: ' . $name . ' <br>
	Номер телефону: ' . $phone . '<br>
	E-mail: ' . $email . '<br>
	Повідомлення:' .$message . '';


if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>