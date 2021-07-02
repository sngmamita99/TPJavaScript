function modifier(numD,pD,nD){	
	objetud.numero=numD;
    objetud.prénom=pD;
    objetud.nom=nD;
}
var numD=prompt("Modifier Numero?");
var pD=prompt("Modifier Prénom?");
var nD=prompt("Modifier Nom?");
modifier(numD,pD,nD);
document.write("<h3>Affichage apres modification</h3>");
afficher();