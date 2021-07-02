//Créer un troisième conteneur
var a=prompt("creer un 3eme conteneur et l'inserer dans le second? y ou Y = oui et autreChose = non");
if(a=="y"|| a=="Y"){
    var newELT=document.createElement('div');
    //identifié par d21                    
    newELT.id="d21";
    //avec un contenu textuel de votre choix
    var textNE=document.createTextNode('Pour ce qui concerne la propriété checked avec une checkbox, il suffit d\'opérer de la même manièrequ\'avec la propriété disabled.');
    newELT.appendChild(textNE);
    //puis l’ajouter dans le conteneur d2
    elt2.appendChild(newELT);
    //Définir une mise en forme pour d21
    newELT.style.backgroundColor="#FEE7F0";
    newELT.style.textAlign="center";
    newELT.style.color="red";
    newELT.style.padding="10px";
    newELT.style.height="10%";
    newELT.style.borderRadius="10px";
}
