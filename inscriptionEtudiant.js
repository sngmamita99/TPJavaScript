var numqt=document.getElementById("quit");
var nCE=document.getElementById("numCE");

nCE.addEventListener("change",function(){
	var v=nCE.value;
	var tdg=v.substring(0,4);
	// alert(typeof(tdg));
	if(tdg < "2017" || tdg > "2021"){
		alert("incorrect! le numéro doit débuter par un nombre compris entre 2017 et 20121");
		nCE.value="";
	}
},false);

numqt.addEventListener("keypress",function(e){
	var ca=e.charCode;
	var cac=String.fromCharCode(ca);
	if(isNaN(cac)){
		alert("enter uniquement des chiffres");
		// numqt.value="";
	}
},false);
// stck.addEventListener("keydown",function(e){
	// alert(e.keyCode);
// },false);