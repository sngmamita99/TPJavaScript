//Calcule de la durée d’une exécution de la fonction puisance
function puissance(x,n){
	var p=1;
	for(var i=1;i<=n;i++){
		p=p*x;
	}
	return p;

}
var ps=document.getElementById('fac');
var r;
var t0=new Date();
t0=t0.getTime();
for(var j=1;j<100;j++){
    r=puissance(5,100);
}
var t1=new Date();
var duree=t1-t0;
t1=t1.getTime();
ps.innerHTML="resultat = "+r+"<br>t0="+t0+" <br>t1="+t1+"<br>duree = "+duree;
// alert("resultat = "+r+" duree = "+duree+" t0="+t0+" t1="+t1);

//Affichage de la date et de  l’horloge de la machine
var dt=new Date();
var a=dt.getFullYear();
var m=dt.getMonth();
var jm=dt.getDate();
var js=dt.getDay();
m+=1;
if(m<10){m="0"+m;}
var tabj=["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
js=tabj[js];
var dd=document.getElementById('dd');
dd.innerHTML="LA DATE : "+js+", le "+jm+"/"+m+"/"+a;
dd.style.textAlign="center";
var hr=dt.getHours();
var mnt=dt.getMinutes();
var s=dt.getSeconds();
var ms=dt.getMilliseconds();
if(hr<10){hr="0"+hr;}
if(mnt<10){mnt="0"+mnt;}
if(s<10){s="0"+s;}
var hlg=document.getElementById('h');
hlg.innerHTML="L'HEURE : "+hr+":"+mnt+":"+s;
hlg.style.textAlign="center";


//mises en oeuvre des fontions setTimeout et setInterval

// setTimeout(function(){
	
	// alert("3 secondes apres chargement");
// },3000);
// setInterval(function(){
	// dd.innerHTML+="d";
// },2000);

setInterval(function(){
	s=parseInt(s)+1;
    if(s<10){s="0"+s;}	
    hlg.innerHTML="L'HEURE : "+hr+":"+mnt+":"+s;
	if(s==59){
		s=-1;
		mnt=parseInt(mnt)+1;
		if(mnt<10){mnt="0"+mnt;}
	}
	if(mnt==59 && s==59){
		s=-1;
		mnt=-1;
		hr=parseInt(hr)+1;	
        if(hr<10){hr="0"+hr;}		
	}
	if(hr==23 && mnt==59 && s==59){
		hr=-1;
		mnt=-1;
		s=-1;		
	}
},1000);
var dc=document.getElementById("dh");
dc.style.border="2px solid yellow";
var c=true;
setInterval(function(){
	if(c){
		dd.style.backgroundColor="white";
	    dd.style.color="black";
		dd.style.borderRadius="10px";
		hlg.style.backgroundColor="black";
	    hlg.style.color="white";
		hlg.style.borderRadius="10px";
		c=false;
	}	
	else{
		dd.style.backgroundColor="black";
	    dd.style.color="white";
		dd.style.borderRadius="10px";
		hlg.style.backgroundColor="white";
	    hlg.style.color="black";
		hlg.style.borderRadius="10px";
		c=true;
	}	
	
},1000);

var H11=document.getElementById('h11');
var H12=document.getElementById('h12');
var dim;
var li=getComputedStyle(dc).width;
var lM=0.95*parseFloat(li);
var lm=0.3*parseFloat(li);
var lc=parseFloat(li);

setInterval(function(){
	if(lc<lm){
		dim=false;
	}
	if(lc>lM){
		dim=true;
	}
	if(dim){
		lc=lc-0.1;
		dc.style.width=lc+"%";
		H11.style.fontSize=lc+"%";
		H12.style.fontSize=lc+"%";
	}
	else{
		lc=lc+0.1;
		dc.style.width=lc+"%";
		H11.style.fontSize=lc+"%";
		H12.style.fontSize=lc+"%";
	}
},10);

var tabc=["pink","yellow","aqua","beige","#048B9A","#CFA0E9","#EBC8B2","#C49C48"];
var n=tabc.length;
var i=0;
setInterval(function(){
    dc.style.backgroundColor=tabc[i];
	i++;	
	if(i==n)
		i=0;
},500);










