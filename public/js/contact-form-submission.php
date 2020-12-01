<?php
header('Content-Type: application/json');
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\SMTP;
// use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'PHPMailerAutoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer();

    $user=$_POST['name'];

    $email=$_POST['email'];
    
    $phone_number = $_POST['phone_number'];
    $msg_subject = $_POST['msg_subject'];
    $message = $_POST['message'];

    //Server settings
    
    $mail->isSMTP();                                            // Send using 
    $mail->Host       = 'sg2plcpnl0105.prod.sin2.secureserver.net';
    $mail->SMTPAuth   = true;                                   
    $mail->Username   = 'info@imaginic-solution.com';
    $mail->Password   = '&VcSAAG0Fx7W';
    $mail->SMTPSecure = 'ssl';        
    $mail->Port       = 465;                                    

    //Recipients
    $mail->setFrom('info@imaginic-solution.com', 'Webiste');
    $mail->addAddress('imaginicsolution@gmail.com');

    // Content
    $mail->isHTML(true);                                  // Set email format to
    $mail->Subject = $msg_subject;
    $mail->Body    = '<p>Name: '.$user.'</p><br><p>Email: '.$email.'</p><br><p>Phone / Skype: '.$phone_number.'</p><br><p>Subject: '.$msg_subject.'</p><br><p>Message: '.$message;
    // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    if($mail->send()) {
        $autoemail = new PHPMailer();
        $autoemail->isSMTP();
        $autoemail->Host       = 'sg2plcpnl0105.prod.sin2.secureserver.net';
        $autoemail->SMTPAuth   = true;
        $autoemail->Username   = 'autoreply@imaginic-solution.com';
        $autoemail->Password   = '_vvL33A(]mAY';
        $autoemail->SMTPSecure = 'ssl';
        $autoemail->Port       = 465;

        $autoemail->setFrom('autoreply@imaginic-solution.com', 'Imaginic Solution');
        $autoemail->addAddress($email);
        $autoemail->isHTML(true);
        $autoemail->Subject = 'Auto Reply';
        $autoemail->Body = '<p>Thank you for showing interest in our serivces, our representative will contact you within 24 hours.<p> <br><br><br>
        <p>Please do not reply to this email, it is an auto-generated email.';

        if($autoemail->send()) {
            $data = 'success';
        }

        $data = 'success';
    } else {
        $data = 'error';
    }
    echo json_encode($data);