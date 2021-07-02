//Affectation de valeurs aux éléments de formulaire
var nom=document.getElementById("nom");
nom.value="creme";
var cat=document.querySelector("#categorie");
cat.value="cat1";
var des=document.querySelector("#description");
des.value="bon produit";
var stck=document.querySelector("#Stock");
stck.value="20";
var prx=document.querySelector("#prix");
prx.value="2000";

// ops=c.options;
// var d=nom.selectedIndex;
// alert(d.innerHTML);

//réinitialisation et l'envoi du formulaire 
var elt=document.getElementById('idform');
// var conf=confirm("Voulais vous réinitialiser le formulaire");
// if(conf){
	// elt.reset();
// }
// var c=confirm("Envoyer le formulaire?");
// if(c){
	// elt.submit();
// }

//représentation de la disponibilité ou non( rupture) d'un produit
var lbd=document.getElementById("labdispo");
var idp=document.getElementById("dispo");
var lbr=document.getElementById("labrup");
var irp=document.getElementById("rupt");
if(stck.value>0){
	idp.checked=true;
	irp.checked=false;
	idp.disabled=true;
	irp.disabled=true;
}
else{
	idp.checked=false;
	irp.checked=true;
	idp.disabled=true;
	irp.disabled=true;
}
//mise en forme de lélément cocher
if(idp.checked){
	lbd.style.color="green";
	lbd.style.fontWeight="bold";
}
else{
	lbr.style.color="red";
	lbr.style.fontWeight="bold";
}

// function(e){
	// e.target-value;
	// e.charCode;
// }

//application d'une mise en forme sur le titre au clique
var tl=document.getElementById('h1');
tl.addEventListener("click",function(e){
	// tl.style.border="3px solid brown";
	// tl.style.textAlign="center";
	// tl.style.backgroundColor="beige";
	// tl.style.color="brown";
	// tl.style.borderRadius="10px 0px 10px 0px";	
	e.target.style.border="3px solid brown";
	e.target.style.textAlign="center";
	e.target.style.backgroundColor="beige";
	e.target.style.color="brown";
	e.target.style.borderRadius="10px 0px 10px 0px";	
	// alert("vous avez cliqué sur le titre");
},false);
tl.addEventListener("mouseout",function(e){	
	alert("vous avez quitté la zone du titre");
},false);

//changer la couleur de fond du champ nom du formulaire apres avoir ecrit 
nom.addEventListener("blur",function(){
	nom.style.backgroundColor="green";
},false);

//Incrémenter la quantité en stock de 10 au double click
stck.addEventListener("dblclick",function(){
    stck.value=parseInt(stck.value)+10;
},false);
 //changer la couleur de fond du champ quantité en stock au survol de la souris
stck.addEventListener("focus",function(){
    stck.backgroundColor="pink";
    stck.fontWeight="bold";
},false);

//verifier la quantité et le prix avant d'envoyer le formulaire
idform.addEventListener("submit",function(e){
    // alert("Envoi des infos");
	if(stck.value<1){
		alert("la quantité ne peut etre  nulle");
	    e.preventDefault();
	}
	var mult=parseInt(prx.value)%500;
	if(mult!=0){
		alert("le prix doit etre un multiple de 500f");
	    e.preventDefault();
	}
},false);

//controle du code saisi
stck.addEventListener("keydown",function(e){
	alert(e.keyCode);
},false);













