<!DOCTYPE html>
<?php
$FirstName = $_POST['FirstName'];
$LastName = $_POST['LastName'];
$Email = $_POST['Email'];
$Password = $_POST['Password'];
$PasswordConfirm = $_POST['PasswordConfirm'];

if(!empty($FirstName) || !empty($LastName) || !empty($Email) || !empty($Password)){
    $host = "localhost";
    $dbUsername = "root";
    $dbPassowrd = "";
    $dbname = "logintest";

    //create connection
    $conn = new mysqli($host, $dbUsername, $dbPassowrd, $dbname);

    if(mysqli_connect_error()){
        die('Connect Error('. mysqli_connect_errno(). ')'. mysqli_connect_error());
    } else {
        $SELECT = "SELECT Email From login WHERE Email = ? Limit 1";
        $INSERT = "INSERT INTO login (FirstName, LastName, Email, Password) values(?, ?, ?, ?)";

        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("s", $Email);
        $stmt->execute();
        $stmt->bind_result($Email);
        $stmt->store_result();
        $rnum = $stmt->num_rows;
        if($Password == $PasswordConfirm){
            if($rnum==0){
                $Password = SHA1($Password);
                $stmt->close();
                $stmt = $conn->prepare($INSERT);
                $stmt->bind_param("ssss", $FirstName, $LastName, $Email, $Password);
                $stmt->execute();
                echo "Please Confirm Your Email.";
                
            }else{
                echo "This Email already exist!";
            }
        }else{
            echo "Password Confirm is wrong!";
        }
        $stmt->close();
        $conn->close();
    }   
} else {
    echo "All field are required";
    die();
}
?>
<html>
<head>
        <title>About | Béni Mellal Hotel</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <a href="index.html">Home</a>
    </body>
</html>
