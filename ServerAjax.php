<?php 
    // echo "Bonjour";
	// if(isset($_GET['prenom'])AND isset($_GET['nom'])){
		// echo " ".$_GET['prenom']." ".$_GET['nom'];
	// }
	$nm=$_GET['nom'];
	$pnm=$_GET['prenom'];
	$connect=new PDO("mysql:host=localhost;port=3306;dbname=commercial","root","");
	if($connect){
        $req="select * from users where nom like '$nm' and prenom like '$pnm'";
		$res=$connect->query($req);
		$lign=$res->fetch();
		
		if($res->rowCount()!=0)
			echo 'Bonjour '.$_GET['prenom'].' '.$_GET['nom'].', vous avez deja un compte '.$lign['type'];
		else
				echo 'Bonjour '.$_GET['prenom'].' '.$_GET['nom'].', vous n\'avez pas un compte';
			
		
	}
	
?>