//Changer les classes des div d1 et d2 respectivement en bl et yel
var elt1=document.getElementById("d1");
var elt2=document.getElementById("d2");
elt1.style.padding="10px";
elt2.style.padding="10px";
// alert(elt1.nodeType);
elt1.setAttribute("class", "bl");
elt2.className="yel";
