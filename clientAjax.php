<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8" />
			<title>produit</title>
	        <link rel="stylesheet" href="clientAjax.css"/> 
		</head>
	    <body>
		    <h1 id='h1'>Exercice d'application JavaScript chapitre 7 AJAX</h1>     
			<h2 id='h2'><button>Double Cliquez ici pour démarrer</button></h2>     
			<p id='p1'></p>  
		    <form method="post" action="traitement.php" autocomplete="off">
                <div id="recherche">
                    <input  type="search" id='rech' name="rechprod" value= "<?php if(isset($_POST['Rechercher'])) echo $_POST['Rechercher']?>" placeholder="Rechercher un produit"/>
                    <input type="submit" id='su' value="Rechercher un produit">
                </div>
            </form>
			<div id="hr">
			<div id="formprod">
                <form method="post"  action="<?php echo $_SERVER['PHP_SELF'] ?>" enctype="multipart/form-data">
                    <h2>table produit</h2>  
                    <label class="lb">code</label>
                    <input type="text" name="code" /></p>
                    <p><label class="lb">Nom</label>
                    <input id="nom" type="text" name="nom"/></p>
                    <p><label class="lb">categorie</label>
                    <input type="text" name="categorie" minlenght="1" id='cat'/></p>
                    <p><label class="lb">description</label>
                    <textarea  name="descript" id='quant'></textarea></p>
                    <p><label class="lb">QuantiteStock </label>
                    <input type="number" name="quantitestock" id='quan' min="1"/></p>
                    <p><label class="lb">prixU</label>
                    <input type="decimal" name="prixU" id='prix' min="150"/></p>  
                    <input type="submit" value="envoyer" id="submit" />
                    <input type="reset" value="annuler" id="submit" />
                </form>
	        </div>
	        <div id="autocomp"></div>
            </div>
			   
		</body>
		<script  src="clientAjax.js"></script>
		</html>
		

