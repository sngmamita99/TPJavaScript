qi.addEventListener("keydown",function(e){
              alert(e.keyCode);
           },false);
          c=ce.substring(0, 3);
           ce.addEventListener("submit",function(e){
             if(c.value<2017 || c.value>2021){
                alert("le numero est incorrecte");
                e.preventDefault();
                  }
             else{
                alert("Envoi des infos");
                 }
           },false);
