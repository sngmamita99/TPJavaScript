//Changer les classes des div d1 et d2 respectivement en bl et yel
var A=document.getElementById('d1');
var B=document.getElementById('d2');
A.setAttribute("class","bl");
B.className="yel";
//Si utilisateur donne son accord on permute les 2 lises en 
var conf=confirm("Voulais vous permuter les 2 mises en formes ?");
if(conf){
	A.className="yel";
	B.setAttribute("class","bl");
}
//Créer un troisième conteneur
var newELT=document.createElement('div');
//identifié par d21                    
newELT.id="d21";
//avec un contenu textuel de votre choix
var textNE=document.createTextNode('ygfihrightghjhvhfhhjjhjehgkjhkkjkjgtkjtgkht');
newELT.appendChild(textNE);
//puis l’ajouter dans le conteneur d2
B.appendChild(newELT);
//Définir une mise en forme pour d21
newELT.style.backgroundColor="blue";
newELT.style.textAlign="center";
newELT.style.color="red";
//Changer la couleur de fond et la couleur de text de chaque paragraphe
var prg=document.getElementsByTagName('p');
var n=prg.length;
for(var i=0;i<n;i++){
	prg[i].style.backgroundColor='brown';
	prg[i].style.color='beige';
}
//Changer la largeur et la couleur de fond d'un conteneur selon que l'utilisateur veut diminuer ou pas
var cf=confirm("Voulais vous diminuer la largeur d'un conteneur et changer sa couleur de fond?");
if(cf){
	var ok=prompt("Choisissais l'un de ces 3 : d1, d2 ou d21");
	if(ok=='d1'){
	    A.style.width="75%";
        A.style.backgroundColor="pink";		
	}
	else if(ok=='d2'){
	    B.style.width="75%";
        B.style.backgroundColor="pink";		
	}
	else if(ok=='d21'){
	    newELT.style.width="75%";
        newELT.style.backgroundColor="pink";		
	}
}
	
	
	
	
	
	
	
	
	
	
	