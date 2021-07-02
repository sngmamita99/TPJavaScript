var tab1=['mami','katy','mimi'];
var tab2=new Array('malloc','calloc','fatou','mya');
document.write("AVant ajout, tab1 : ");
for(var i in tab1)
    document.write(tab1[i]+" ");
document.write("<br><br>");
document.write("AVant ajout, tab2 : ");
for(var j in tab2)
    document.write(tab2[j]+" ");

tab1.push('mamita','MSA');//ajout d'elements à la fin du tableau tab1
tab2.unshift('me');//ajout d'elements au debut du tableau tab2
document.write("<br><br>Apres ajout (à la fin du tableau), tab1 : ");
for(var i in tab1)
    document.write(tab1[i]+" ");
document.write("<br><br>");
document.write("Apres ajout (au debut du tableau), tab2 : ");
for(var j in tab2)
    document.write(tab2[j]+" ");
