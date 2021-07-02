var d1=document.querySelector('#div1 h1');
d1.style.backgroundColor="pink";
d1.addEventListener('click',function(){
	$("p").hide();
});
var d2=document.querySelector('#div2 h1');
d2.style.backgroundColor="pink";
d2.addEventListener('dblclick',function(){
	$("p",$("#div1")).show();
});
var d3=document.querySelector('#div3 h1');
d3.style.backgroundColor="pink";
d3.addEventListener('click',function(){
		$("p",$("#div1,#div2")).toggle();
});
// var D1=document.querySelector('#div1');
//Afficher le contenu HTML du premier div
alert($("#div1").html());
//Modifier du contenu du premier paragraphe du deuxième div
$("#div2 h1 + p").html("New content with Malloc");
//Ajouter d’un sous-titre pour le contenu en début du premier conteneur
$("#div1 h1").after("<h2>hello<h2>");

var par12=document.querySelector("#p12");
par12.addEventListener("click",function(){
	Vi1=$("#inp1").val();
	Vi2=$("#inp2").val();
	$("#div1 h2 + p").html($("#div1 h2 + p").html()+Vi1+" et "+Vi2);
});
$("#div1 h1").css({"width":"50%","background-color":"blue","font-weight":"bold","color":"white"});

$("#inp").on("keyup",function(e){
	var c=e.which;
	c=String.from.charCode(c);
	if(c=="z")
		$("#inp2").focus();
});

$("p").on("mouseover",function(){
	$(this).css({"width":"50%","background-color":"beige","font-weight":"bold","color":"black","text-align":"center"});
});
$("p").on("mouseout",function(){
	$(this).css({"width":"90%","background-color":"silver","font-style":"italic","color":"black","text-align":"center"});
});
$("h1").one("click",function(){
	$(this).html($(this).html()+" "+$(this).html());
});
setInterval(function(){
	 $("#div1").slideToggle(3000);
// $("#div1").slideUp(200,
    // function(){
		// $("#div1").slideDown(200);
	// })
},4 000);

















