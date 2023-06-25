<?php
    $email=$_POST['email'];
    $password=$_POST['password'];
    
    //database connection
    $conn = new mysqli('localhost','root','','create_acc');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }
    else {
        $stmt = $conn->prepare("select * from signup where email =? ");
        $stmt->bind_param("s",$email);
        $stmt->execute();
        $stmt_result = $stmt->get_result();
        if($stmt_result->num_rows >0)
        {
            $data = $stmt_result->fetch_assoc();
            if($data['password']===$password)
            {
                echo "<h2>LOGIN SUCCESSFUL!</h2>";
            }
            else 
            {
                echo "<h2>INVALID EMAIL OR PASSWORD</h2>";
            }
        } 
        else 
        {
            echo "<h2> INVALID EMAIL OR PASSWORD </h2>";
        }
        // $stmt->close();
        // $conn->close();
    }
?>