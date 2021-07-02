var h=document.getElementById('h2');
var p=document.getElementById('p1');


h.addEventListener("dblclick",function(){	
    var objb = new XMLHttpRequest();
	var url="ServerAjax.php";
    var pnm=prompt("Votre prénom?");
    var nm=prompt("Votre nom?");
    nm=encodeURIComponent(nm);
    pnm=encodeURIComponent(pnm);
    infos='?prenom='+pnm+'&nom='+nm;
    url+=infos;
    objb.open('GET',url);
    objb.send(null);

    objb.onreadystatechange=function(){
        if(objb.readyState==4){
	        if(objb.status==200){
	            p.innerHTML=objb.responseText;
				p.style.backgroundColor="#048B9A";
				p.style.color="#EBC8B2";
                p.style.fontSize="120%";
                p.style.fontWeight="bold";
                p.style.textAlign="center";
                p.style.border="3px solid #C49C48";
                p.style.borderRadius="5px";
	       }
        }				
    }
},false);

var div=document.getElementById('autocomp');
div.style.visibility="hidden";
var nomp=document.getElementById('nom');
nomp.addEventListener("keyup",function(){
	var ls=nomp.value;
	var obj = new XMLHttpRequest();
	var url='listenm.php';
	obj.open('POST',url);
	obj.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

	obj.send('nom='+ls);
	
    obj.onreadystatechange=function(){
        if(obj.readyState==4 && obj.status==200){
			
	            // div.innerHTML=ls;
			div.innerHTML=obj.responseText;
			div.style.visibility="visible";	
			var tds=document.querySelectorAll('#autocomp td');
			for(var i=0;i<tds.length;i++){
				var td=tds[i];
				td.addEventListener("mouseover",function(){
					td.style.backgroundColor="white";
					td.style.color="#048B9A";
				},false);
				td.addEventListener("mouseout",function(){
			        td.style.backgroundColor="#048B9A";
				    td.style.color="white";
				},false);
				    td.addEventListener("click",function(){
					nomp.value=this.innerHTML;
				},false);
			}
        }				
    }
},false);KKK






































// var nane=['kjlk','uhjuh','jhjhj','gfgh','gfhg','fgdd'];
// function check(field) {
	// var name = field.value; 
	// var l = name.length; 
	// var last = name;
	// function AC_indexOf() {
		// var ctr=0;
		// for(var i = 0; i < base.length; i++) {
			// var next = base[i]; 
			// if(name==next)
				// return 1; 
			// if(name==next.substr(0, l)) { 
			    // last=next; ctr++;
			// } 
		// }
		// return ctr; 
	// } 
	// var ctr = AC_indexOf(); 
	// if(ctr != 1) 
		// return; 
	// field.value = last;
	// var content = last + " trouvé."; 
	// document.getElementById("storage").innerHTML=content; 
// }
		    



// var listepays=["Afganishtan","Afrique du sud","Albanie","Algerie","Allemagne","Andorre","Angola","Anguilla","Antarctique","Anticagua-et-Barbuda",
// "antilles neerlandaises","Arabie Saoudites","Argentine","Armenie","Aruba","Australie","Autriche","Ajerbadjan"];

// var listResultats=document.getElementById('suggestions');
// var inputElt=document.getElementById('rech');

// function resultattfiltre(saisie){
    // listResultats.innerHTML="";
    // listepays.forEach(function(pays){
        // if(pays.indexOf(saisie)==0){
            // var divElt=document.createElement("div");
            // divElt.textContent=pays;
            // divElt.classList.add("suggestioon");
            // divElt.addEventListener('click',function(e){
                // console.log("click?");
                // inputElt.value=e.target.textContent;
                // divElt.innerHTML="";

            // });
            // listResultats.appendChild(divElt);
        // }

    // });
// }
// inputElt.addEventListener('focus',function(){
    // console.log("oui j'ai le focus");
    // this.addEventListener('input',function(){
        // resultattfiltre(this.value);
    // });
// });
// inputElt.addEventListener("blur",function(e){
    // listResultats.innerHTML="";
    // console.log("non je n'ai pas le focus");
// });