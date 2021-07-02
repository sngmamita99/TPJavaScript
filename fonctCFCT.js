//Changer la couleur de fond et la couleur de text de chaque paragraphe
var b=prompt("Changer la couleur de fond et la couleur de text de chaque paragraphe ? y ou Y = oui et n ou N = non");
    if(a=="y"|| a=="Y"){
    var prg=document.getElementsByTagName('p');
    var n=prg.length;
    for(var i=0;i<n;i++){
	    prg[i].style.backgroundColor='#77B5FE';
	    prg[i].style.color='white';
    }
}