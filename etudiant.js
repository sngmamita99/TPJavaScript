//Création d'un objet etudiant
var objetud={numero:"201808ABC",prenom:"mami",nom:"SOUNG"};
//Affichage d'un etudiant
document.write("<table><tr><th>Numero CE</th><th>Prénom</th><th>Nom</th></tr>");
document.write("<tr><td>"+objetud.numero+"</td><td>"+objetud.prenom+"</td><td>"+objetud.nom+"</td></tr></table>");
//Modifier objet etudiant
objetud.numero="201909DEF";
objetud.prenom="Mamita";
objetud.nom="SOUNG";

//Affichage apres modification
document.write("<h3>Affichage apres modification</h3>");
document.write("<table><tr><th>Numero CE</th><th>Prénom</th><th>Nom</th></tr>");
document.write("<tr><td>"+objetud.numero+"</td><td>"+objetud.prenom+"</td><td>"+objetud.nom+"</td></tr></table>");
//Affichage apres ajout d'un nouveau champ
objetud.age="18";
document.write("<h3>Affichage apres ajout d'un nouveau champ</h3>");
document.write("<table><tr><th>Numero CE</th><th>Prénom</th><th>Nom</th><th>Age</th></tr><tr>");
for(var i in objetud){
    document.write("<td>"+objetud[i]+"</td>");
}
document.write("</tr></table>");
