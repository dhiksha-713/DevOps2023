<?php
    $username=$_POST['username'];
    $email=$_POST['email'];
    $password=$_POST['password'];
    $cpassword=$_POST['cpassword'];
    
    //database connection
    $conn = new mysqli('localhost','root','','create_acc');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }
    else {
        $stmt = $conn->prepare("insert into signup(username,email,password,cpassword) values(?,?,?,?)");
        $stmt->bind_param("ssss",$username,$email,$password,$cpassword);
        $stmt->execute();
        echo "Account created successfully!";
        $stmt->close();
        $conn->close();
    }
?>