<?php 
    
	$connect=new PDO("mysql:host=localhost;port=3306;dbname=commercial","root","");
	if($connect){
	
        if(isset($_POST['nom'])){
		    $lt=$_POST['nom'];
		    $req="select * from users where nom like '%$lt%'";
		    $res=$connect->query($req);
			if($res){
                echo '<table>';
		        while($lign=$res->fetch()){
			        echo '<tr><td>'.$lign['nom'].'</td></tr>';
		        }
				echo '</table>';
			}
		}
	}
	
?>