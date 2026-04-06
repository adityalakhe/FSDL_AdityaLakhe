<?php
include "db.php";

$name = $_POST['name'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$department = $_POST['department'];

$query = "INSERT INTO student (name, email, mobile, department)
          VALUES ('$name', '$email', '$mobile', '$department')";

mysqli_query($conn, $query);

header("Location: index.php");
?>
