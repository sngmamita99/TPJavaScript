//Création d'un objet etudiant
var objetud;
function creeretudiant(nmr,prn,n){
	objetud={numero:nmr,prénom:prn,nom:n};
}
//Affichage d'un etudiant
function afficher(){
	document.write("<table><tr>");
	for(var i in objetud){
        document.write("<th>"+i+"</th>");
    }
	document.write("</tr><tr>");
	for(var j in objetud){
        document.write("<td>"+objetud[j]+"</td>");
    }
	document.write("</tr></table>");
    
}
var num=prompt("Numero?");
var p=prompt("Prénom?");
var n=prompt("Nom?");
etd=creeretudiant(num,p,n);
afficher();



