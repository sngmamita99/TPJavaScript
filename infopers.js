    var n=prompt("Donner votre nom");
    var p=prompt("Donner votre prénom");    
	var a;
	do{
		a=prompt("Donner votre age");	
	}while(!checkAge(a)) //OU a>35 || a<17
	var s=prompt("Donner votre genre");
	if(s=="f" || s=="F")
        document.write("<h2><marquee BEHAVIOR='alternate' DIRECTION='left'>Bonjour Madame "+p+" "+n+"</marquee></h2>");
	else if(s=="m" || s=="M"){
		document.write("<h2><marquee BEHAVIOR='alternate' DIRECTION='left'>Bonjour monsieur "+p+" "+n+"</marquee></h2>");
	}
	else
		document.write("<h4>Le sexe renseigner est incorrect</h4>");
	
	

