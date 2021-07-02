//Changer la largeur et la couleur de fond d'un conteneur selon que l'utilisateur veut diminuer ou pas
var cf=confirm("Voulais vous diminuer la largeur d'un conteneur et changer sa couleur de fond?");
if(cf){
	var ok=prompt("Choisissais l'un de ces 3 : d1, d2 ou d21");
	if(ok=='d1'){
	    elt1.style.width="75%";
        elt1.style.backgroundColor="pink";		
        elt1.style.margin="auto";	
        elt1.style.borderRadius="25px 0px 25px 0px";				
	}
	else if(ok=='d2'){
	    elt2.style.width="75%";
        elt2.style.backgroundColor="pink";		
		elt2.style.margin="auto";
		elt2.style.borderRadius="25px 0px 25px 0px";		
	}
	else if(ok=='d21'){
	    newELT.style.width="50%";
        newELT.style.backgroundColor="pink";
        newELT.style.margin="auto";		
        newELT.style.borderRadius="25px 0px 25px 0px";		
	}
}
