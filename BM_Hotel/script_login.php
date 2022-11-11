<?php


$host="localhost";
$user="root";
$password="";
$db="logintest";


$conn=mysqli_connect($host,$user,$password,$db);

if(!$conn)
{
	die("connection error");
}


if($_SERVER["REQUEST_METHOD"]=="POST")
{
	$username=$_POST["emailLogin"];
	$password=$_POST["passLogin"];
	$password = SHA1($password);

    $sql = "SELECT * From admin WHERE Email_admin = $username AND Password_admin = $password";

    $result = mysqli_query($conn, $sql);

    $admin = mysqli_fetch_all($result, MYSQLI_ASSOC);

    print_r ($admin);


	if(true)
	{
		// header("location:Administration.php");
	}

}




?>
