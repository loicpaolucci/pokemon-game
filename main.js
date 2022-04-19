const divResultat = document.querySelector("#resultat");


var tabJeu = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];

var tabResultat = [
    [1,3,4,5],
    [7,6,2,2],
    [6,7,1,3],
    [8,5,4,8]
];

var oldSelection=[];
var nbAffiche = 0;
var ready = true;

afficheTableau();

function afficheTableau(){

var txt = "";

for(var i=0; i < tabJeu.length ; i++){
    txt += "<div>";
    for(var j=0; j < tabJeu[i].length ; j++){
        if(tabJeu[i][j]=== 0){
        txt += "<button class='btn btn-danger  m-2' style='width:100px;height:100px;color:goldenrod' onClick='verif(\""+i+"-"+j+"\")'>Afficher</button>";
        } else{
            txt += "<img src='"+getImage(tabJeu[i][j])+"' style='width:100px ; height:100px' class='m-2'>";
        }
    }
        txt += "</div>";
}
        divResultat.innerHTML = txt;

}

    function getImage(valeur){
        var imgTxt = "image/" ;

        switch(valeur){
            case 1 : imgTxt += "arti.png";
            break;
            case 2 : imgTxt += "chari.png";
            break;
            case 3 : imgTxt += "draco.png";
            break;
            case 4 : imgTxt += "elek.png";
            break;
            case 5 : imgTxt += "herbi.png";
            break;
            case 6 : imgTxt += "heri.png";
            break;
            case 7 : imgTxt += "poke.png";
            break;
            case 8 : imgTxt += "sulfu.png";
            break;
            default : console.log("cas non pris en compte")
        }
        return imgTxt;
    }

    function verif(bouton){
        if(ready){
            nbAffiche++;

            var ligne = bouton.substr(0,1);
            var colonne = bouton.substr(2,1);
            
            tabJeu[ligne][colonne] = tabResultat[ligne][colonne];
            afficheTableau();
    
            if(nbAffiche>1){
                ready = false;
                setTimeout(()=> {

                //verification
                if(tabJeu[ligne][colonne]!== tabResultat[oldSelection[0]][oldSelection[1]]){
                    tabJeu[ligne][colonne] = 0;
                    tabJeu[oldSelection[0]][oldSelection[1]] = 0;
                }
                    afficheTableau();
                    ready = true;
                    nbAffiche = 0;

                },500)

            } else{
                oldSelection = [ligne,colonne];
            }
        }
        
    }

    function genereTableauAleatoire(){
        var tab = [];
        var nbImagePosition = [0,0,0,0,0,0,0,0];

        for(var i = 0 ; i < 4 ; i++){
            var ligne = [];
            for(var j = 0 ; j < 4 ; j++){
                var fin = false;
                while(!fin){
                
                var randomImage = Math.floor(Math.random() * 8);
                if(nbImagePosition[randomImage]< 2){
                    ligne.push(randomImage+1);
                    nbImagePosition[randomImage]++;
                    fin = true;
                }
            }   
            }

            tab.push(ligne);
        }

        return tab;
    }